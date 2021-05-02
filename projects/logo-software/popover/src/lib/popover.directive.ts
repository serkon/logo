import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

import { PopoverService } from './popover.service';

/**
 * Popover directive lets developers to implement and call logo popover easily. Just add [logoPopover] to your element and give your popover id to display it.
 */
@Directive({
  selector: '[logoPopover]',
})
export class PopoverDirective implements AfterViewInit {
  public _logoPopover: string;

  get logoPopover() {
    return this._logoPopover;
  }

  @Input() set logoPopover(n: string) {
    this._logoPopover = n;
  }

  constructor(private el: ElementRef, private popoverService: PopoverService) {
  }

  @HostListener('click', ['$event'])
  public onClick(targetElement) {
    event.preventDefault();
    event.stopPropagation();
    // const popover: HTMLElement = (event.target as HTMLElement).closest('logo-popover');
    if (this.el.nativeElement.contains(targetElement.target)) {
      this.popoverService.activeElement = this.el.nativeElement;
      this.popoverService.activeWidth = this.el.nativeElement.offsetWidth;
      this.popoverService.showPopover(this._logoPopover);
    }
    // this.el.nativeElement.contains(targetElement.target) ?  : this.popoverService.activePopover !== null && !!popover ? '' : this.popoverService.closePopover();
  }

  @HostListener('document:click', ['$event'])
  public onBodyClick(clickedElement) {
    const popover: HTMLElement = (event.target as HTMLElement).closest('logo-popover');
    if (!popover) {
      this.popoverService.closePopover();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.popoverService.closePopover();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    console.log(window.scrollX);
    this.popoverService.closePopover();
  }

  ngAfterViewInit(): void {
    // this.popoverService.activeWidth = this.el.nativeElement.offsetWidth;
  }
}
