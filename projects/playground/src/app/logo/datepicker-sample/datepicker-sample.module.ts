import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatepickerSampleRoutingModule } from './datepicker-sample-routing.module';
import { DatepickerShowcaseComponent } from './datepicker-showcase/datepicker-showcase.component';

@NgModule({
  declarations: [DatepickerShowcaseComponent],
  imports: [
    CommonModule,
    DatepickerSampleRoutingModule,
  ],
  exports: [DatepickerShowcaseComponent],
})
export class DatepickerSampleModule { }
