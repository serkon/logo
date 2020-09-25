import { AfterViewInit, Component } from '@angular/core';

export enum ELEMENT {
  BUTTON = 'BUTTON',
  INPUT = 'INPUT',
}

@Component({
  selector: 'logo-theme-showcase',
  templateUrl: './theme-showcase.component.html',
  styleUrls: ['./theme-showcase.component.scss'],
})
export class ThemeShowcaseComponent implements AfterViewInit {
  statuses = ['brand', 'primary', 'secondary', 'basic', 'light', 'dark', 'gray'];
  semantic = ['success', 'info', 'warning', 'danger'];
  colors = ['text'];
  states = ['hover', 'active', 'focus'];
  types = ['fill', 'outline', 'ghost'];
  shades = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  elements = {
    button: {
      name: ELEMENT.BUTTON,
      render: {
        fill: true,
        outline: true, // ['brand', 'primary', 'secondary', 'light', 'dark', 'gray'],
        ghost: true,
      },
    },
    input: {
      name: ELEMENT.INPUT,
      render: {
        fill: true,
        outline: true, // ['primary', 'secondary', 'light', 'dark', 'gray'],
        ghost: true,
      },
    },
  };
  keys: string[] = [];
  elementType = ELEMENT;

  constructor() {
    this.keys = Object.keys(this.elements);
    this.colors = [...this.colors, ...this.statuses, ...this.semantic];
  }

  ngAfterViewInit() {
  }

  getColor(item) {
    return getComputedStyle(document.documentElement).getPropertyValue(item);
  }
}
