import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'logo-perspective',
  template: `
    <div class="card">
      <div class="image">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['perspective.scss'],
})
export class PerspectiveComponent implements AfterViewInit {
  /**
   * The initiator. The element that will change the perspective value as you move the mouse over it.
   */
  @Input() container: string;
  /**
   * It adds more space (padding) to the element to make perspective. Default is 100.
   */
  @Input() threshold = 100;
  /**
   * Maximum x axis angle, default is 20
   */
  @Input() xDegree = 20;
  /**
   * Maximum y axis angle, default is 20
   */
  @Input() yDegree = 20;
  /**
   * It make more sensitive to the perspective. Default is 20.
   */
  @Input() sensitivity = 20;
  /**
   * It makes disable or enable X axis perspective. Default is true.
   */
  @Input() rotateX = true;
  /**
   * It makes disable or enable Y axis perspective. Default is true.
   */
  @Input() rotateY = true;
  /**
   * Event emitter when changed perspective.
   */
  @Output() degree: EventEmitter<{ x: number, y: number }> = new EventEmitter<{ x: number, y: number }>();

  constructor(private elementRef: ElementRef) {
  }
  ngAfterViewInit() {
    this.mouseEnter();
  }

  mouseEnter() {
    const elm: HTMLElement = this.container ? document.querySelector(this.container) : this.elementRef.nativeElement;
    const card: HTMLElement = this.elementRef.nativeElement.querySelector('.card');
    const image: HTMLElement = elm.querySelector('.image');
    card.style.padding = this.threshold + 'px';
    card.style.margin = `-${this.threshold}px`;
    card.style.perspective = image.offsetWidth + 'px';
    elm.addEventListener('mousemove', (e) => {
      const x = e.pageX;
      const y = e.pageY;
      const coords = elm.getBoundingClientRect();
      const elmX = (coords.left + elm.offsetWidth / 2);
      const elmY = (coords.top + elm.offsetHeight / 2);
      let angleX, angleY;

      if (Math.abs((elmY - y) / this.sensitivity) <= this.yDegree) {
        angleX = (elmY - y) / this.sensitivity;
      } else {
        angleX = (elmY - y) > 0 ? this.yDegree : -this.yDegree;
      }
      if (Math.abs((elmX - x) / -this.sensitivity) <= this.xDegree) {
        angleY = (elmX - x) / -this.sensitivity;
      } else {
        angleY = (elmX - x) > 0 ? -this.xDegree : this.xDegree;
      }
      if (angleX && angleY) {
        if (this.rotateX && this.rotateY) {
          image.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        } else {
          if (this.rotateX && !this.rotateY) {
            image.style.transform = `rotateX(${angleX}deg)`;
          }
          if (this.rotateY && !this.rotateX) {
            image.style.transform = `rotateY(${angleY}deg)`;
          }
        }
        this.degree.emit({x: angleX, y: angleY});
      }
    });

    elm.addEventListener('mouseenter', (e) => {
      image.style.transition = 'all 1s linear';
    });

    elm.addEventListener('mouseleave', (e) => {
      image.style.transition = 'all 0.7s linear';
      image.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });

  }
}
