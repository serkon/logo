import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateModule } from '@logo-software/date';

import { DateSampleRoutingModule } from './date-sample-routing.module';
import { DateShowcaseComponent } from './date-showcase/date-showcase.component';

@NgModule({
  declarations: [DateShowcaseComponent],
  imports: [CommonModule, DateSampleRoutingModule, DateModule],
  exports: [DateShowcaseComponent],
})
export class DateSampleModule {
}
