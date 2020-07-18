import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

export interface SliderItem {
  icon: string;
  abbr: string;
  title: string;
  description: string;
  link: string;
  class: string;
}

@Component({
  selector: 'logo-carousel',
  template: `
    <div class="slider" #slider>
      <div class="sliding" #sliding>
        <ng-content></ng-content>
        <!--
        <img class="icon" src="{{item.icon}}" title="{{item.title}}"/>
        <div class="abbr">{{item.abbr}}</div>
        <div class="title">{{item.title}}</div>
        <div class="description">{{item.description}}</div>
        <a class="go"></a>
        -->
      </div>
    </div>
    <div class="arrow-with-animation" *ngIf="arrow">
      <a href="#" class="slider-arrow left" (click)="moveLeft($event)">
        <i></i>
        <svg>
          <use xlink:href="#circle"/>
        </svg>
      </a>
      <a href="#" class="slider-arrow" (click)="moveRight($event)">
        <i></i>
        <svg>
          <use xlink:href="#circle"/>
        </svg>
      </a>
    </div>
    <div class="dots" *ngIf="dots">
      <a class="dot" *ngFor="let item of maxMoveCountArray; let i = index" [ngClass]="{'active':currentItem===i}"
         (click)="onDotClick(i)"></a>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol
        id="circle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 44 44"
        width="44px"
        height="44px"
        fill="none"
        stroke="currentColor"
      >
        <circle r="20" cy="22" cx="22" id="test"/>
      </symbol>
    </svg>
  `,
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  /**
   * Total will be moved item count, default is one
   */
  @Input() count = 1;
  /**
   * It enable dots under the slide. Default is false;
   */
  @Input() dots = false;
  /**
   * It enable arrows under the slide. Default is true.
   */
  @Input() arrow = true;
  @ViewChild('slider', {read: ElementRef}) slider: ElementRef;
  @ViewChild('sliding', {read: ElementRef}) sliding: ElementRef;
  totalItems: number = 0;
  currentItem: number = 0;
  showingCount: number = 0;
  itemBoxWidth: number = 0;
  sliderWidth: number = 0;
  slidingWidth: number = 0;
  maxSize: number = 0;
  maxMoveCount: number = 0;
  maxMoveCountArray = [];

  constructor(private elementRef: ElementRef, private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.totalItems = this.sliding.nativeElement.childElementCount;
    this.itemBoxWidth = this.getItemWidth() * this.count;
    this.slidingWidth = this.sliding.nativeElement.offsetWidth;
    this.resize();
    this.cd.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.reset();
    this.resize();
  }

  reset() {
    this.currentItem = 0;
    this.sliding.nativeElement.style.transform = `translateX(0px)`;
  }

  resize() {
    this.showingCount = Math.floor(this.calculateShowingItems());
    this.sliderWidth = this.slider.nativeElement.offsetWidth;
    this.maxSize = this.slidingWidth - this.sliderWidth;
    this.maxMoveCount = Math.ceil(this.maxSize / this.itemBoxWidth);
    this.maxMoveCountArray = [...Array(this.maxMoveCount + 1).keys()];
  }

  calculateShowingItems() {
    return this.slider.nativeElement.offsetWidth / this.itemBoxWidth;
  }

  getItemWidth(): number {
    const elementRef = this.sliding.nativeElement.firstElementChild;
    return elementRef.offsetWidth + parseFloat(getComputedStyle(elementRef).marginLeft) + parseFloat(getComputedStyle(elementRef).marginRight);
    // return this.sliding.nativeElement.querySelector(`:nth-child(${index})`).offsetWidth;
  }

  cursorAnimate(event) {
    event.preventDefault();
    const arrow = event.target.closest('.slider-arrow');
    if (!arrow.classList.contains('animate')) {
      arrow.classList.add('animate');
      setTimeout(() => {
        arrow.classList.remove('animate');
      }, 1600);
    }
  }

  moveRight(event) {
    this.cursorAnimate(event);
    if (this.totalItems >= this.currentItem && this.currentItem < this.maxMoveCount) {
      this.currentItem = this.currentItem + 1;
      this.move();
    }
  }

  moveLeft(event) {
    this.cursorAnimate(event);
    if (this.currentItem >= 1) {
      this.currentItem = this.currentItem - 1;
      this.move();
    }
  }

  move() {
    const translateXSize = this.itemBoxWidth * this.currentItem;
    this.sliding.nativeElement.style.transform = `translateX(${translateXSize > this.maxSize ? -this.maxSize : -translateXSize}px)`;
  }

  onDotClick(index: number) {
    this.currentItem = index;
    this.move();
  }
}
