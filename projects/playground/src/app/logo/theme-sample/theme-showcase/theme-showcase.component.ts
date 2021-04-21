import { AfterViewInit, Component } from '@angular/core';

export enum ELEMENT {
  BUTTON = 'BUTTON',
  INPUT = 'INPUT',
  LINK = 'LINK',
  CHECKBOX = 'CHECKBOX',
}

@Component({
  selector: 'logo-theme-showcase',
  templateUrl: './theme-showcase.component.html',
  styleUrls: ['./theme-showcase.component.scss'],
})
export class ThemeShowcaseComponent implements AfterViewInit {
  statuses = ['primary', 'secondary', 'basic', 'light', 'dark', 'gray', 'neutral'];
  semantic = ['success', 'info', 'warning', 'danger'];
  visualization = ['yellow', 'purple', 'pink', 'teal', 'tan'];
  colors = [];
  states = ['hover', 'active', 'focus'];
  types = ['fill', 'outline', 'ghost'];
  shades = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  elements = {
    button: {
      name: ELEMENT.BUTTON,
      render: {
        fill: [...this.statuses, ...this.semantic], // true,
        outline: [...this.statuses, ...this.semantic], // true, // ['brand', 'primary', 'secondary', 'light', 'dark', 'gray'],
        ghost: [...this.statuses, ...this.semantic], // true,
      },
    },
    input: {
      name: ELEMENT.INPUT,
      render: {
        fill: [...this.statuses, ...this.semantic], // true,
        outline: [...this.statuses, ...this.semantic], // true, // ['brand', 'primary', 'secondary', 'light', 'dark', 'gray'],
        ghost: [...this.statuses, ...this.semantic], // true,
      },
    },
    link: {
      name: ELEMENT.LINK,
      render: {
        fill: [...this.statuses, ...this.semantic], // true,
        outline: [...this.statuses, ...this.semantic], // true, // ['brand', 'primary', 'secondary', 'light', 'dark', 'gray'],
        ghost: [...this.statuses, ...this.semantic], // true,
      },
    },
    checkbox: {
      name: ELEMENT.CHECKBOX,
      render: {
        fill: [...this.statuses, ...this.semantic], // true,
        outline: [...this.statuses, ...this.semantic], // true, // ['brand', 'primary', 'secondary', 'light', 'dark', 'gray'],
        ghost: [...this.statuses, ...this.semantic], // true,
      },
    },
  };
  keys: string[] = [];
  elementType = ELEMENT;

  constructor() {
    this.keys = Object.keys(this.elements);
    this.colors = [...this.colors, ...this.statuses, ...this.semantic, ...this.visualization];
  }

  ngAfterViewInit() {
  }

  getColor(item) {
    return getComputedStyle(document.documentElement).getPropertyValue(item);
  }

  isSemantic(color: string) {
    return this.semantic.includes(color);
  }
}
