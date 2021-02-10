import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo-select-showcase',
  templateUrl: './select-showcase.component.html',
  styleUrls: ['./select-showcase.component.scss'],
})
export class SelectShowcaseComponent implements OnInit {
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
  selectedKind: string = 'primary';
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
    this.selectedKind = kindType;
    this.kindTypes.map((x) => {
      if (kindType !== x.class) {
        x.selected = false;
      }
    })
  }

}
