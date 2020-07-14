import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';

export class Pointer {
  constructor(private element: HTMLElement, private outside: HTMLElement) {
    element.style.cursor = 'none';
    this.setMouseEnter();
    this.setMouseLeave();
  }

  setMouseEnter() {
    this.element.addEventListener('mouseenter', () => {
      this.outside.classList.add('hovered');
    });
  }

  setMouseLeave() {
    this.element.addEventListener('mouseleave', () => {
      this.outside.classList.remove('hovered');
    });
  }
}

@Component({
  selector: 'logo-cursor',
  template: `
    <div class="circle-outside"></div>
    <div class="circle-inside"></div>`,
  styleUrls: ['./cursor.component.scss'],
})
export class CursorComponent implements AfterViewInit {
  /**
   * cursor circle movement timing duration. It will complete finding the cursor position in the defined time.
   */
  @Input() timeDuration: number = 400;
  /**
   * defined target mouse over cursor circle size will be enlarged.
   */
  @Input() targets = [];
  public defaultTargets = ['.cursor', 'button', 'a'];
  private outside: HTMLElement;
  private inside: HTMLElement;
  private isMovingTiming: number;
  private moveTiming: number;

  constructor(private elementRef: ElementRef, private router: Router) {
    elementRef.nativeElement.ownerDocument.body.style.cursor = 'none';
    this.listener();
  }

  ngAfterViewInit() {
    this.outside = this.elementRef.nativeElement.querySelector('.circle-outside');
    this.inside = this.elementRef.nativeElement.querySelector('.circle-inside');
    this.outside.style.transition = `all ${this.timeDuration}ms ease-out`;
    document.addEventListener('mousemove', (event) => this.cursor(event));
  }

  cursor(event) {
    window.clearTimeout(this.isMovingTiming);
    window.clearTimeout(this.moveTiming);
    this.outside.classList.add('moving');
    this.moveTiming = window.setTimeout(() => {
      this.outside.style.transform = this.position(event, this.outside);
      this.inside.style.transform = this.position(event, this.inside);
      this.isMovingTiming = window.setTimeout(() => {
        this.outside.classList.remove('moving');
      }, this.timeDuration);
    }, 0);
    requestAnimationFrame(this.cursor);
  }

  position(event, element) {
    return `translateX(${event.clientX - element.offsetLeft - element.offsetWidth / 2}px) translateY(${event.clientY - element.offsetTop - element.offsetHeight / 2}px)`;
  }

  listener() {
    document.addEventListener('mouseover', event => {
      for (const element of [...this.defaultTargets, ...this.targets]) {
        const isExit = Array.from(document.querySelectorAll(element)).filter(item => item === event.target);
        if (isExit[0]) {
          new Pointer(isExit[0] as HTMLElement, this.outside);
        }
      }
    });
  }
}
