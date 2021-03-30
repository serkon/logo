import { Component } from '@angular/core';

@Component({
  selector: 'logo-switch-showcase',
  templateUrl: './switch-showcase.component.html',
  styleUrls: ['./switch-showcase.component.scss'],
})
export class SwitchShowcaseComponent {
  sizes = [
    {class: 'small', selected: false},
    {class: 'medium', selected: true},
    {class: 'large', selected: false},
  ];
  colors = [
    {class: 'primary', selected: true},
    {class: 'danger', selected: false},
    {class: 'success', selected: false},
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
  isRounded: boolean = true;

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
}
