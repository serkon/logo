import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Params } from '@angular/router';

/**
 * Tab component determines Tabs title and its content. Tab's title attribute will be the display text of the tab. And its child DOM elements will be the content of the tabs.
 *
 * <sub>app.component.ts</sub>
 *
 * ```html
 *  <logo-tab
 *   (init)="tabInit($event)"
 *   [params]="{id: 'user-id-1'}"
 *   [route]="'logo/table-sample/table-showcase/table-showcase.component'"
 *   [title]="'Two'"
 *   [state]="'view'"
 *   [isDisabled]="false"
 *   [isHidden]="false"
 *  >
 *  <div>içerik 2</div>
 *  </logo-tab>
 * ```
 */
@Component({
  selector: 'logo-tab',
  template: `
    <ng-container *ngIf="isActive">
      <div class="pane">
        <ng-content></ng-content>
      </div>
    </ng-container>
  `,
  styleUrls: ['tab.component.scss'],
})
export class TabComponent implements AfterViewInit {
  /**
   * Tab will be active if set true, default is false
   */
  @Input() isActive: boolean = false;
  /**
   * display text will be visible for click
   */
  @Input() title: string;
  /**
   * redirection address will be load
   */
  @Input() route: string;
  /**
   * a collection of matrix and query URL parameters.
   */
  @Input() params: Params;
  /**
   * Fragment uses to redirection to the anchor.
   * For example, the fragment must be set to `section` for direction to `http://domain.com/#section`
   */
  @Input() fragment: string;
  /**
   * State of the tab as 'edit', 'done', 'view'.
   */
  @Input() state: 'edit' | 'done' | 'view';
  /**
   * Disabled status of the tab.
   */
  @Input() isDisabled: boolean = false;
  /**
   * Viewable status of the tab.
   */
  @Input() isHidden: boolean = false;
  /**
   * Init event emitter
   */
  @Output() init: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();
  /**
   * Click even emitter
   */
  @Output() click: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();

  ngAfterViewInit() {
    this.init.emit(this);
  }

  htmlClick() {
    event.stopPropagation();
    this.click.emit(this);
  }
}
