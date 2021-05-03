import { Component } from '@angular/core';

import { PopoverPosition, PopoverService } from '@logo-software/popover';

@Component({
  selector: 'logo-popover-showcase',
  templateUrl: './popover-showcase.component.html',
  styleUrls: ['./popover-showcase.component.scss'],
})
export class PopoverShowcaseComponent {
  constructor(private popoverService: PopoverService) {
  }

  public PopoverPosition = PopoverPosition;

  public datepicker = {
    value: null,
    min: new Date('05.16.2021'),
    max: '31.12.2999',
    second: '31.06.2021',
  };

  public test = 111;

  dateChanged(value) {
    console.log('Date changed: ', value);
  }

  testMethod($event) {
    this.test = Number($event.target.value) < 120 ? 130 : Number($event.target.value);
  }

  popOverClosed($event) {
    console.log($event);
  }
}
