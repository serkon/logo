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
    value: '05.04.2021',
  };
}
