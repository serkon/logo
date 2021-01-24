import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionSampleRoutingModule } from './accordion-sample-routing.module';
import { AccordionShowcaseComponent } from './accordion-showcase/accordion-showcase.component';
import { AccordionModule } from '@logo-software/accordion';

@NgModule({
  declarations: [AccordionShowcaseComponent],
  imports: [CommonModule, AccordionSampleRoutingModule, AccordionModule],
  exports: [AccordionShowcaseComponent],
})
export class AccordionSampleModule {
}
