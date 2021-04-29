/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */
import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Params } from '@angular/router';

/**
 * Item component determines Wizard's step title and its content. Steps's title attribute will be the display text of the step. And its child DOM elements will be the content of the step.
 *
 * <sub>app.component.ts</sub>
 *
 * ```html
 *  <logo-step
 *   (init)="stepInit($event)"
 *   [params]="{id: 'user-id-1'}"
 *   [route]="'logo/table-sample/table-showcase/table-showcase.component'"
 *   [title]="'My Step 2'"
 *   [state]="'done'"
 *   [isDisabled]="false"
 *   [isHidden]="false"
 *   [icon]="'le-home'"
 *   [iconExtensions]="'fa'"
 *  >
 *    <div>Content of the Step</div>
 *  </logo-step>
 * ```
 */
@Component({
  selector: 'logo-step',
  template: `
    <ng-container *ngIf="isActive">
      <div class="pane">
        <ng-content></ng-content>
      </div>
    </ng-container>
  `,
  styleUrls: ['item.component.scss'],
})
export class ItemComponent implements AfterViewInit {
  /**
   * Step will be active if set true, default is false
   */
  @Input() isActive: boolean = false;
  /**
   * Title of the step which will be show at badge
   */
  @Input() title: string;
  /**
   * Redirection address for the step
   */
  @Input() route: string;
  /**
   * Params of the step if needed.
   */
  @Input() params: Params;
  /**
   * Fragment uses to redirection to the anchor.
   * For example, the fragment must be set to `section` for direction to `http://domain.com/#section`
   */
  @Input() fragment: string;
  /**
   * State of the step to determine completed status or not.
   */
  @Input() isCompleted: boolean = false;
  /**
   * Disabled status of the step.
   */
  @Input() isDisabled: boolean = false;
  /**
   * Viewable status of the step.
   */
  @Input() isHidden: boolean = false;
  /**
   * Icon css class of the step. This icon will be shown instead of step number at wizard header
   */
  @Input() icon: string = null;
  /**
   * Logo wizard supports other font based icon libraries. If standard CSS Classes needed, you can use this option
   */
  @Input() iconExtensions: string = '';
  /**
   * Init event emitter that runs when the step is initialized. This will lets developer to trigger step loaded or not.
   */
  @Output() init: EventEmitter<ItemComponent> = new EventEmitter<ItemComponent>();

  ngAfterViewInit() {
    this.init.emit(this);
  }
}
