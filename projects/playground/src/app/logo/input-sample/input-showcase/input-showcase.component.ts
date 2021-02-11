import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo-input-showcase',
  templateUrl: './input-showcase.component.html',
  styleUrls: ['./input-showcase.component.scss'],
})
export class InputShowcaseComponent implements OnInit {

  sizeTypes = [
    {class: 'medium', selected: true},
    {class: 'large', selected: false},
  ];
  stateTypes = [
    {class: 'default', selected: true},
    {class: 'radio', selected: false},
    {class: 'danger', selected: false},
    {class: 'warning', selected: false},
    {class: 'success', selected: false},
  ];
  selectedSize: string = 'medium';
  selectedKind: string = 'basic';
  selectedDisableState: boolean = true;
  input: any;
  disabled: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeSizeType(sizeType: string) {
    this.selectedSize = sizeType;
    this.sizeTypes.map((x) => {
      if (sizeType !== x.class) {
        x.selected = false;
      }
    });
  }

  changeStateType(kindType: string) {
    this.selectedKind = kindType;
    this.stateTypes.map((x) => {
      if (kindType !== x.class) {
        x.selected = false;
      }
    });
  }

}
