import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatepickerSampleRoutingModule } from './datepicker-sample-routing.module';
import { DatepickerShowcaseComponent } from './datepicker-showcase/datepicker-showcase.component';
import { DatepickerModule } from '@logo-software/datepicker';

@NgModule({
  declarations: [DatepickerShowcaseComponent],
  imports: [
    CommonModule,
    DatepickerSampleRoutingModule,
    DatepickerModule,
  ],
  exports: [DatepickerShowcaseComponent],
})
export class DatepickerSampleModule { }
