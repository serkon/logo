import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

import { PopoverService } from './popover.service';

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
    const popover: HTMLElement = (event.target as HTMLElement).closest('logo-popover');
    this.el.nativeElement.contains(targetElement.target) ? this.popoverService.togglePopover(this._logoPopover) : this.popoverService.activePopover !== null && !!popover ? '' : this.popoverService.closePopover();
  }

  @HostListener('document:click', ['$event'])
  public onBodyClick(clickedElement) {
    const popover: HTMLElement = (event.target as HTMLElement).closest('logo-popover');
    this.popoverService.activePopover !== null && !!popover ? '' : this.popoverService.closePopover();
  }

  ngAfterViewInit(): void {
    this.popoverService.activeWidth = this.el.nativeElement.offsetWidth;
    this.popoverService.activeElement = this.el.nativeElement;
  }
}
