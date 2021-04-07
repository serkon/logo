import { Component } from '@angular/core';

@Component({
  selector: 'logo-date-showcase',
  templateUrl: './date-showcase.component.html',
  styleUrls: ['./date-showcase.component.scss'],
})
export class DateShowcaseComponent {
  public calendar = {
    first: '2017-01-22 02:24',
    min: '2017-01-11 14:45',
    max: '2017-02-11 02:24',
    pattern: 'YYYY-MM-DD HH:mm',
    second: '2017-01-29 02:24',
  };
}
