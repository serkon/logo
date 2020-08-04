import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo-combobox-showcase',
  templateUrl: './combobox-showcase.component.html',
  styleUrls: ['./combobox-showcase.component.scss'],
})
export class ComboboxShowcaseComponent implements OnInit {
  // items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  items = [
    {a: {b: 'serkan', c: 2}},
    {a: {b: 'nihan', c: 4}},
    {a: {b: 'sarp', c: 6}},
    {a: {b: 'kimya', c: 8}},
    {a: {b: 'ayhan', c: 10}},
    {a: {b: 'sadettin', c: 12}},
  ];

  selected = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
