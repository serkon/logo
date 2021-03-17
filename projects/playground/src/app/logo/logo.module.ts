import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoRoutingModule } from './logo-routing.module';
import { LogoComponent } from './logo.component';
import { AccordionSampleModule } from './accordion-sample/accordion-sample.module';
import { DatepickerSampleModule } from './datepicker-sample/datepicker-sample.module';
import { PagingSampleModule } from './paging-sample/paging-sample.module';
import { SelectSampleModule } from './select-sample/select-sample.module';

@NgModule({
  declarations: [LogoComponent],
  imports: [
    CommonModule,
    LogoRoutingModule,
    AccordionSampleModule,
    DatepickerSampleModule,
    PagingSampleModule,
    SelectSampleModule,
  ],
  exports: [],
})
export class LogoModule {
}
