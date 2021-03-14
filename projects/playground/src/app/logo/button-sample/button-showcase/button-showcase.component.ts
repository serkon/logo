import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo-button-showcase',
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss'],
})
export class ButtonShowcaseComponent implements OnInit {
  sizes = [
    {class: 'small', selected: false},
    {class: 'medium', selected: true},
    {class: 'large', selected: false},
  ];
  types = [
    {class: 'fill', selected: true},
    {class: 'outline', selected: false},
    {class: 'ghost', selected: false},
  ];
  colors = [
    {class: 'primary', selected: true},
    {class: 'secondary', selected: false},
    {class: 'basic', selected: false},
    {class: 'light', selected: false},
    {class: 'dark', selected: false},
    {class: 'gray', selected: false},
    {class: 'neutral', selected: false},
  ];
  selectedSize: string = 'medium';
  selectedColor: string = 'primary';
  selectedType: string = 'fill';
  selectedDisableState: boolean = true;
  disabled: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeSize(sizeType: string) {
    this.selectedSize = sizeType;
    this.sizes.map((x) => {
      if (sizeType !== x.class) {
        x.selected = false;
      }
    });
  }

  changeColor(kindType: string) {
    this.selectedColor = kindType;
    this.colors.map((x) => {
      if (kindType !== x.class) {
        x.selected = false;
      }
    });
  }

  changeType(kindType: string) {
    this.selectedType = kindType;
    this.types.map((x) => {
      if (kindType !== x.class) {
        x.selected = false;
      }
    });
  }
}
