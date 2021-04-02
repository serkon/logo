import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimepickerModule } from '@logo-software/timepicker';

import { TimepickerSampleRoutingModule } from './timepicker-sample-routing.module';
import { TimepickerShowcaseComponent } from './timepicker-showcase/timepicker-showcase.component';

@NgModule({
  declarations: [TimepickerShowcaseComponent],
  imports: [
    CommonModule,
    TimepickerSampleRoutingModule,
    TimepickerModule,
  ],
  exports: [TimepickerShowcaseComponent],
})
export class TimepickerSampleModule {
}
