import { Component } from '@angular/core';

import { AccordionItem } from '@logo-software/accordion';

@Component({
  selector: 'logo-accordion-showcase',
  templateUrl: './accordion-showcase.component.html',
  styleUrls: ['./accordion-showcase.component.scss'],
})
export class AccordionShowcaseComponent {

  public items: AccordionItem[] = [{
    'id': 0,
    'title': 'Root',
    'iconClasses': 'le-alarm_bell_1',
    'description': 'Lorem Ipsum Dolor Sit Amet.',
  }];
}
