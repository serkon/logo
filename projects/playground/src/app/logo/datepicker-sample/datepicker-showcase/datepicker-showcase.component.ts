import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo-datepicker-showcase',
  templateUrl: './datepicker-showcase.component.html',
  styleUrls: ['./datepicker-showcase.component.scss'],
})
export class DatepickerShowcaseComponent implements OnInit {

  public datepicker = {
    value: '05.04.2021',
    min: '01.01.1900',
    max: '31.12.2999',
    second: '31.06.2021',
  };

  constructor() {
  }

  ngOnInit(): void {

  }

}
