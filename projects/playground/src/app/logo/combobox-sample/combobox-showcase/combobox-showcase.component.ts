import { Component } from '@angular/core';

@Component({
  selector: 'logo-combobox-showcase',
  templateUrl: './combobox-showcase.component.html',
  styleUrls: ['./combobox-showcase.component.scss'],
})
export class ComboboxShowcaseComponent {
  // items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  items = [
    {a: {b: 'first', c: 11}},
    {a: {b: 'second', c: 12}},
    {a: {b: 'third', c: 13}},
    {a: {b: 'fourth', c: 14}},
    {a: {b: 'fifth', c: 15}},
    {a: {b: 'sixth', c: 16}},
  ];
  displayedItems = [];

  selected = this.items[1];
  multi = [this.items[5], this.items[4], this.items[2]];
  auto = [this.items[1], this.items[5]];

  constructor() {
    this.displayedItems = this.clone(this.items);
  }

  clone(items) {
    return items.map(item => Array.isArray(item) ? this.clone(item) : item);
  };

  onFiltered($event) {
    this.displayedItems = this.items.filter(item => {
      return item.a.b.includes($event);
    });
  }

  onSelect($event) {
    console.log('onSelect: ', $event);
  }

  onItemRemoved($event) {
    console.log('on Item Remove: ', $event);
  }

  removeAll() {
    this.multi = [];
  }
}
