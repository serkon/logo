/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { PopoverService } from './popover.service';

/**
 * Overlay popover container. Renders provided content inside. You can set options of your popover in the component.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-popover
 *  [id]="'myLogoPopover'"
 *  [hasSearch]="true"
 *  [isBackClick]="true"
 *  [cssClasses]="'my-own-theme-css'"
 * >
 *  My own content in my own popover.
 * </logo-popover>
 * ```
 */
@Component({
  selector: 'logo-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  /**
   * Sets the option of search option is shown or not. Also this option enable or disable filter trigger action.
   */
  @Input() hasSearch: boolean = true;
  /**
   * Sets the option of close the popover on document click.
   */
  @Input() isBackClick: boolean = true;
  /**
   * The identifier of the popover. It must be setted and must be unique to work with multiple popovers on same page.
   */
  @Input() id: string;
  /**
   * Your own css classes for designing your own theme
   */
  @Input() cssClasses: string;
  /**
   * Set Popover width same as opener's width.
   */
  @Input() sameSize: boolean = true;

  constructor(public popoverService: PopoverService, private elementRef: ElementRef) {
  }

  /**
   * Output event of the filter input.
   */
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();
  public popoverSearch: string = '';

  @ViewChild('popoverContentBase', {read: ElementRef, static: false}) set popoverElement(elementRef: ElementRef) {
    if (elementRef && elementRef.nativeElement && this.sameSize) {
      elementRef.nativeElement.style.width = `${this.popoverService.activeElement.offsetWidth}px`;
    }
    this.popoverService.openWatcher.next(this.popoverService.display);
  };

  ngOnInit(): void {
    this.popoverService.hasSearch = this.hasSearch;
  }

  public searchOutput(element: HTMLInputElement) {
    this.filter.emit(element.value);
    this.popoverSearch = element.value;
  }
}
