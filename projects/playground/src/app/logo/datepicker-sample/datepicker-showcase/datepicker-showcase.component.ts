import { Component } from '@angular/core';

@Component({
  selector: 'logo-datepicker-showcase',
  templateUrl: './datepicker-showcase.component.html',
  styleUrls: ['./datepicker-showcase.component.scss'],
})
export class DatepickerShowcaseComponent {
  public datepicker = {
    value: new Date('05.22.2021'),
    min: new Date('05.16.2021'),
    max: '31.12.2999',
    second: '31.06.2021',
  };

  dateChanged(value) {
    console.log('Date changed: ', value);
  }

  popOverClosed($event) {
    console.log($event);
  }
}
