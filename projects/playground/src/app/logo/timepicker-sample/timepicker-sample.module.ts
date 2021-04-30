import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimepickerModule } from '@logo-software/timepicker';

import { TimepickerSampleRoutingModule } from './timepicker-sample-routing.module';
import { TimepickerShowcaseComponent } from './timepicker-showcase/timepicker-showcase.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TimepickerShowcaseComponent],
  imports: [
    CommonModule,
    TimepickerSampleRoutingModule,
    TimepickerModule,
    FormsModule,
  ],
  exports: [TimepickerShowcaseComponent],
})
export class TimepickerSampleModule {
}
