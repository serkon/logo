import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionSampleRoutingModule } from './accordion-sample-routing.module';
import { AccordionShowcaseComponent } from './accordion-showcase/accordion-showcase.component';
import { AccordionModule } from '@logo-software/accordion';
import { DrawerModule } from '@logo-software/drawer';

@NgModule({
  declarations: [AccordionShowcaseComponent],
  imports: [CommonModule, AccordionSampleRoutingModule, AccordionModule, DrawerModule],
  exports: [AccordionShowcaseComponent],
})
export class AccordionSampleModule {
}
