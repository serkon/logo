import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '@logo-software/dynamic';

import { DynamicSampleRoutingModule } from './dynamic-sample-routing.module';
import { DynamicShowcaseComponent } from './dynamic-showcase/dynamic-showcase.component';

@NgModule({
  declarations: [DynamicShowcaseComponent],
  imports: [CommonModule, DynamicSampleRoutingModule, DynamicModule],
  exports: [DynamicShowcaseComponent],
})
export class DynamicSampleModule {
}
