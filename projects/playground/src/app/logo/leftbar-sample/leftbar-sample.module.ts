import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftbarModule } from '@logo-software/leftbar';
import { ApplicationTreeModule } from '@logo-software/application-tree';

import { LeftbarSampleRoutingModule } from './leftbar-sample-routing.module';
import { LeftbarShowcaseComponent } from './leftbar-showcase/leftbar-showcase.component';

@NgModule({
  declarations: [LeftbarShowcaseComponent],
  imports: [
    CommonModule,
    LeftbarSampleRoutingModule,
    LeftbarModule,
    ApplicationTreeModule,
  ],
  exports: [LeftbarShowcaseComponent],
})
export class LeftbarSampleModule {
}
