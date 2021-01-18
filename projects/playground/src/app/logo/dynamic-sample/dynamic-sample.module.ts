import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicSampleRoutingModule } from './dynamic-sample-routing.module';
import { DynamicShowcaseComponent } from './dynamic-showcase/dynamic-showcase.component';

@NgModule({
  declarations: [DynamicShowcaseComponent],
  imports: [
    CommonModule,
    DynamicSampleRoutingModule,
  ],
  exports: [DynamicShowcaseComponent],
})
export class DynamicSampleModule { }
