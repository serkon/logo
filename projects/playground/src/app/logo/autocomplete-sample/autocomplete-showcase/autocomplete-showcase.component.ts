import { Component } from '@angular/core';

@Component({
  selector: 'logo-autocomplete-showcase',
  templateUrl: './autocomplete-showcase.component.html',
  styleUrls: ['./autocomplete-showcase.component.scss'],
})
export class AutocompleteShowcaseComponent {

  items = [
    {a: {b: 'first', c: 2}},
    {a: {b: 'second', c: 4}},
    {a: {b: 'third', c: 6}},
    {a: {b: 'fourth', c: 8}},
    {a: {b: 'fifth', c: 10}},
    {a: {b: 'sixth', c: 12}},
  ];
  displayedItems = [];

  selected = this.items[3];

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
