import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

import { PopoverService } from './popover.service';

@Directive({
  selector: '[logoPopover]',
})
export class PopoverDirective implements AfterViewInit {
  @Input() logoPopover: string;

  constructor(private el: ElementRef, private popoverService: PopoverService) {
  }

  @HostListener('document:click', ['$event'])
  public onClick(targetElement) {
    const popover: HTMLElement = (event.target as HTMLElement).closest('logo-popover');
    this.el.nativeElement.contains(targetElement.target) ? this.popoverService.togglePopover(this.logoPopover) : this.popoverService.activePopover !== null && !!popover ? '' : this.popoverService.closePopover();
  }

  ngAfterViewInit(): void {
    this.popoverService.activeWidth = this.el.nativeElement.offsetWidth;
    this.popoverService.activeElement = this.el.nativeElement;
  }
}
