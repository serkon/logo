import { AfterViewInit, Directive, ElementRef } from '@angular/core';

/**
 * Makes element focused.
 *
 * __Usage Example:__
 *
 *```html
 * <input [autofocus] type="text" placeholder="text" />
 * ```
 */
@Directive({
  selector: '[autofocus]',
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
