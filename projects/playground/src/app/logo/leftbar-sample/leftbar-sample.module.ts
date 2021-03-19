import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftbarSampleRoutingModule } from './leftbar-sample-routing.module';
import { LeftbarShowcaseComponent } from './leftbar-showcase/leftbar-showcase.component';
import { LeftbarModule } from '@logo-software/leftbar';

@NgModule({
  declarations: [LeftbarShowcaseComponent],
  imports: [
    CommonModule,
    LeftbarSampleRoutingModule,
    LeftbarModule,
  ],
  exports: [LeftbarShowcaseComponent],
})
export class LeftbarSampleModule {
}
