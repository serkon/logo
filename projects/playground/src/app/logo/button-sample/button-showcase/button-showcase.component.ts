import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'logo-button-showcase',
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss'],
})
export class ButtonShowcaseComponent implements OnInit {
  sizeTypes = [
    {class: 'small', selected: false},
    {class: 'medium', selected: true},
    {class: 'large', selected: false},
  ];
  kindTypes = [
    {class: 'primary', selected: true},
    {class: 'danger', selected: false},
    {class: 'ghost', selected: false},
  ];
  selectedSize: string = 'medium';
  selectedKindType: string = 'primary';
  selectedDisableState: boolean = true;
  disabled: boolean;

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
    })
  }

  changeKindType(kindType: string) {
    this.selectedKindType = kindType;
    this.kindTypes.map((x) => {
      if (kindType !== x.class) {
        x.selected = false;
      }
    })
  }
}
