import { Component, Input, OnInit } from '@angular/core';

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
    <div class="slider">
      <div class="sliding">
        <ng-content></ng-content>
        <!--
        <img class="icon" src="{{item.icon}}" title="{{item.title}}"/>
        <div class="abbr">{{item.abbr}}</div>
        <div class="title">{{item.title}}</div>
        <div class="description">{{item.description}}</div>
        <a class="go"></a>
        -->
      </div>
      <div class="demo">
        <a href="#" class="slider-arrow left" (click)="onClick($event)">
          <i></i>
          <svg>
            <use xlink:href="#circle"/>
          </svg>
        </a>
        <a href="#" class="slider-arrow" (click)="onClick($event)">
          <i></i>
          <svg>
            <use xlink:href="#circle"/>
          </svg>
        </a>
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
    </div>
  `,
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() items: SliderItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(event) {
    event.preventDefault();
    this.cursorAnimate(event);
  }

  cursorAnimate(event) {
    const arrow = event.target.closest('.slider-arrow');
    if (!arrow.classList.contains('animate')) {
      arrow.classList.add('animate');
      setTimeout(() => {
        arrow.classList.remove('animate');
      }, 1600);
    }
  }

}
