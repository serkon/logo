import { Component } from '@angular/core';

@Component({
  selector: 'logo-timepicker-showcase',
  templateUrl: './timepicker-showcase.component.html',
  styleUrls: ['./timepicker-showcase.component.scss'],
})
export class TimepickerShowcaseComponent {
  public time: string = '00:12';

  timeIs($event) {
    console.log(this.time);
  }
}
