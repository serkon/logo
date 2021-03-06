import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatepickerModule } from '@logo-software/datepicker';

import { DatepickerSampleRoutingModule } from './datepicker-sample-routing.module';
import { DatepickerShowcaseComponent } from './datepicker-showcase/datepicker-showcase.component';

@NgModule({
  declarations: [DatepickerShowcaseComponent],
  imports: [
    CommonModule,
    DatepickerSampleRoutingModule,
    DatepickerModule,
    FormsModule,
  ],
  exports: [DatepickerShowcaseComponent],
})
export class DatepickerSampleModule {
}
