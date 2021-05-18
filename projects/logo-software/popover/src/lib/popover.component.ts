/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

import { PopoverPosition, PopoverService } from './popover.service';

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
  /**
   * Set position of the popover. It will accept the position corner's of the opener.
   */
  @Input() position: PopoverPosition = PopoverPosition.POPOVER_RIGHT;

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
    } else if (elementRef && elementRef.nativeElement) {
      const element = elementRef.nativeElement;
      switch (this.position) {
        case PopoverPosition.POPOVER_RIGHT:
          const rightPos = Math.round(this.popoverService.activeElement.offsetWidth + this.popoverService.activeElement.offsetLeft);
          element.style.left = `${rightPos}px`;
          break;
        case PopoverPosition.POPOVER_LEFT:
          const leftPos = Math.round(this.popoverService.activeElement.offsetParent.clientWidth - this.popoverService.activeElement.offsetLeft);
          element.style.right = `${leftPos}px`;
          break;
        case PopoverPosition.POPOVER_BOTTOM_RIGHT:
          const bottomRightPos = Math.round(this.popoverService.activeElement.offsetParent.clientWidth - (this.popoverService.activeElement.offsetLeft + this.popoverService.activeElement.offsetWidth));
          const bottomRightTopPos = Math.round(this.popoverService.activeElement.offsetHeight + this.popoverService.activeElement.offsetTop);
          element.style.right = `${bottomRightPos}px`;
          element.style.top = `${bottomRightTopPos}px`;
          break;
        case PopoverPosition.POPOVER_BOTTOM_LEFT:
          const bottomleftTopPos = Math.round(this.popoverService.activeElement.offsetHeight + this.popoverService.activeElement.offsetTop);
          element.style.left = `${this.popoverService.activeElement.offsetLeft}px`;
          element.style.top = `${bottomleftTopPos}px`;
          break;
        case PopoverPosition.POPOVER_TOP_LEFT:
          element.style.left = `${this.popoverService.activeElement.offsetLeft}px`;
          element.style.bottom = `${this.popoverService.activeElement.offsetHeight}px`;
          break;
        case PopoverPosition.POPOVER_TOP_RIGHT:
          const topRightPos = Math.round(this.popoverService.activeElement.offsetParent.clientWidth - (this.popoverService.activeElement.offsetLeft + this.popoverService.activeElement.offsetWidth));
          element.style.right = `${topRightPos}px`;
          element.style.bottom = `${this.popoverService.activeElement.offsetHeight}px`;
          break;
        default:
          const defaultPos = Math.round(this.popoverService.activeElement.offsetWidth + this.popoverService.activeElement.offsetLeft);
          element.style.left = `${defaultPos}px`;
          break;
      }
    }
    this.popoverService.openWatcher.next(this.popoverService.display);
  };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.popoverService.closePopover();
  }

  ngOnInit(): void {
    this.popoverService.hasSearch = this.hasSearch;
  }

  public searchOutput(element: HTMLInputElement) {
    this.filter.emit(element.value);
    this.popoverSearch = element.value;
  }
}
