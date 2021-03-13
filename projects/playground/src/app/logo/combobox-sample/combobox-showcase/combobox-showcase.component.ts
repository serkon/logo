import { Component } from '@angular/core';

@Component({
  selector: 'logo-combobox-showcase',
  templateUrl: './combobox-showcase.component.html',
  styleUrls: ['./combobox-showcase.component.scss'],
})
export class ComboboxShowcaseComponent {
  // items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  items = [
    {a: {b: 'first', c: 2}},
    {a: {b: 'second', c: 4}},
    {a: {b: 'third', c: 6}},
    {a: {b: 'fourth', c: 8}},
    {a: {b: 'fifth', c: 10}},
    {a: {b: 'sixth', c: 12}},
  ];
  displayedItems = [];

  selected = null;

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
}
