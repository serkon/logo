/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { ItemComponent } from './item.component';

/**
 * Accordions are useful when you want to toggle between hiding and showing large amount of content.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.ts</sub>
 *
 * ```html
 * <logo-accordion [items]="items" [start]="0" [iconClasses]=""></logo-accordion>
 * ```
 */
export interface AccordionItem {
  /**
   * Optional, id of the item if it comes from database,
   */
  id?: any;
  /**
   * Class names to be added to menu item
   */
  classes?: string;
  /**
   * Class names to be added to menu item icons
   */
  iconClasses?: string;
  /**
   * Accordion title information that displays on list
   */
  title?: string;
  /**
   * Accordion content information that slides in and out
   */
  description?: string;
  /**
   * The variable that defines whether the accordion item is open or not.
   */
  isOpen?: boolean;
}

/**
 * Accordions are useful when you want to toggle between hiding and showing large amount of content.
 */
@Component({
  selector: 'logo-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {

  /**
   * Specifies one or more CSS classes to be used by the element. When set, this class will also be used by all child elements that don't have their own class.
   */
  @Input() classes: string = '';
  /**
   * Specifies one or more CSS classes to be used by the element's icons. When set, this class will also be used by all child elements icons that don't have their own class.
   */
  @Input() iconClasses?: string = '';
  /**
   * Accordion items to show with native template
   */
  @Input() public items: AccordionItem[] = [];
  /**
   * Option to show shadow on title
   */
  @Input() public hasShadow: boolean = false;
  /**
   * http request will be get items from server for each title opened
   */
  @Input() request?: HttpRequest<any>;
  /**
   * Item click event trigger. When clicked on any item this event will be called and pushes the item information to the given method.
   */
  @Output() public onItemClick: EventEmitter<AccordionItem> = new EventEmitter<AccordionItem>();

  @Input() public elementId;
  /**
   * Inline accordion items, if there is
   */
  @ContentChildren(ItemComponent) accordionItems: QueryList<ItemComponent>;

  /**
   * Give HttpClient to the component. First import HttpClientModule to main Module of the app. For example.
   *  ```typescript
   * @NgModule({ imports: [
   *   BrowserModule,
   *   HttpClientModule, // Add HttpClientModule
   * ]
   * })
   * export class AppModule {
   * }
   * ```
   * @param http
   */
  constructor(private http?: HttpClient) {
  }

  private _level = 0;

  public get level() {
    return this._level;
  }

  @Input('level')
  public set level(level: any) {
    ++level;
    this._level = level;
  }

  ngOnInit() {
    if (!this.elementId) {
      this.elementId = this.generateElementId();
    }
  }

  generateElementId() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      + Math.random().toString(16).slice(2)
      + Date.now().toString(16).slice(4);
  }

  itemClick(item: AccordionItem, $event?: MouseEvent) {
    this.$onItemClick(item);
  }

  $onItemClick(item: AccordionItem) {
    this.onItemClick.emit(item);
  }
}
