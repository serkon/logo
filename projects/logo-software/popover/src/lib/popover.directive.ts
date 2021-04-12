import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { PopoverService } from './popover.service';

@Directive({
  selector: '[logoPopover]',
})
export class PopoverDirective {

  @Input() logoPopover: string;

  constructor(private el: ElementRef, private popoverService: PopoverService) {
  }

  @HostListener('document:click', ['$event'])
  public onClick(targetElement) {
    this.el.nativeElement.contains(targetElement.target) ? this.popoverService.togglePopover(this.logoPopover) : targetElement.target.id === 'popoverContent' || targetElement.target.id === 'popoverSearch' || targetElement.target.id === this.popoverService.activePopover ? '' : this.popoverService.closePopover();
  }
}
