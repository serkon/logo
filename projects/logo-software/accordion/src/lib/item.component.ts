/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Params } from '@angular/router';

/**
 * Item component determines Accordion Item's title and its content. Item's title attribute will be the display text of the tem. And its child DOM elements will be the content of the accordion item.
 *
 * <sub>app.component.ts</sub>
 *
 * ```html
 *  <logo-accordion-item
 *   (onInit)="accordionItemInit($event)"
 *   (onClick)="accordionItemClick($event)"
 *   [params]="{id: 'user-id-1'}"
 *   [title]="'My Accordion Item'"
 *   [isHidden]="false"
 *   [isOpen]="false"
 *   [icon]="'le-home'"
 *   [selectorId]="'myUniqueId'"
 *   [classes]="'my-own-theme'"
 *  >
 *    <div>Content of the Accordion Item</div>
 *  </logo-accordion-item>
 * ```
 */
@Component({
  selector: 'logo-accordion-item',
  template: `
    <li [hidden]="isHidden" [ngClass]="classes" class="level-0 accordion-category">
      <input [checked]="isOpen" hidden id="{{selectorId}}" type="checkbox"/>
      <label
        (click)="accordionItemClick()"
        class="label label-category"
        for="{{selectorId}}"
      >
        <span [ngClass]="icon" class="{{icon}}"></span>
        <span class="title">
            <p class="large">{{title}}</p>
          </span>
        <span class="arrow le-arrow_down"></span>
      </label>
      <div class="content">
        <ng-content></ng-content>
      </div>
    </li>
  `,
  styleUrls: ['item.component.scss'],
})
export class ItemComponent implements AfterViewInit, OnInit {
  /**
   * Title of the accordion item
   */
  @Input() title: string;
  /**
   * Params of the accordion if needed.
   */
  @Input() params: Params;
  /**
   * Viewable status of the accordion item.
   */
  @Input() isHidden: boolean = false;
  /**
   * Open status of the accordion item.
   */
  @Input() isOpen: boolean = false;
  /**
   * Icon css class of the item. This icon will be shown instead of the item header
   */
  @Input() icon: string = null;
  /**
   * Css classes of the item.
   */
  @Input() classes: string = null;
  /**
   * Unique Id for content selector
   */
  @Input() selectorId: string = null;
  /**
   * Init event emitter that runs when the step is initialized. This will lets developer to trigger step loaded or not.
   */
  @Output() onInit: EventEmitter<ItemComponent> = new EventEmitter<ItemComponent>();
  /**
   * Click event emmitter on item clicked.
   */
  @Output() onClick: EventEmitter<ItemComponent> = new EventEmitter<ItemComponent>();

  ngAfterViewInit() {
    this.onInit.emit(this);
  }

  accordionItemClick($event?: MouseEvent) {
    if (event) {
      event.cancelBubble = true;
      event.stopPropagation();
    }
    this.$onAccordionItemClick(this);
  }

  $onAccordionItemClick(item: ItemComponent) {
    this.onClick.emit(item);
  }

  ngOnInit() {
    if (!this.selectorId) {
      this.selectorId = this.generateElementId();
    }
  }

  generateElementId() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      + Math.random().toString(16).slice(2)
      + Date.now().toString(16).slice(4);
  }
}
