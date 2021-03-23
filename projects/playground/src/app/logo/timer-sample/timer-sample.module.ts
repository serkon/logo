import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimerModule } from '@logo-software/timer';

import { TimerSampleRoutingModule } from './timer-sample-routing.module';
import { TimerShowcaseComponent } from './timer-showcase/timer-showcase.component';

@NgModule({
  declarations: [TimerShowcaseComponent],
  imports: [
    CommonModule,
    TimerSampleRoutingModule,
    TimerModule,
    FormsModule,
  ],
  exports: [TimerShowcaseComponent],
})
export class TimerSampleModule {
}
