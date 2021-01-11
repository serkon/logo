import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionSampleRoutingModule } from './accordion-sample-routing.module';
import { AccordionShowcaseComponent } from './accordion-showcase/accordion-showcase.component';


@NgModule({
  declarations: [AccordionShowcaseComponent],
  imports: [
    CommonModule,
    AccordionSampleRoutingModule,
  ],
  exports: [AccordionShowcaseComponent],
})
export class AccordionSampleModule { }
