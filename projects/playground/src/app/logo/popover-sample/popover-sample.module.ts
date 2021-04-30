import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatepickerModule } from '@logo-software/datepicker';
import { PopoverModule } from '@logo-software/popover';

import { PopoverSampleRoutingModule } from './popover-sample-routing.module';
import { PopoverShowcaseComponent } from './popover-showcase/popover-showcase.component';

@NgModule({
  declarations: [PopoverShowcaseComponent],
  imports: [CommonModule, PopoverSampleRoutingModule, PopoverModule, DatepickerModule],
  exports: [PopoverShowcaseComponent],
})
export class PopoverSampleModule {
}
