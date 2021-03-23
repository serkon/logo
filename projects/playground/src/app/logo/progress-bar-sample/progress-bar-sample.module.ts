import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarSampleRoutingModule } from './progress-bar-sample-routing.module';
import { ProgressBarShowcaseComponent } from './progress-bar-showcase/progress-bar-showcase.component';
import { ProgressBarModule } from '@logo-software/progress-bar';

@NgModule({
  declarations: [ProgressBarShowcaseComponent],
  imports: [
    CommonModule,
    ProgressBarSampleRoutingModule,
    ProgressBarModule,
  ],
  exports: [ProgressBarShowcaseComponent],
})
export class ProgressBarSampleModule {
}
