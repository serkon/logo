import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from '@logo-software/breadcrumb';

import { BreadcrumbSampleRoutingModule } from './breadcrumb-sample-routing.module';
import { BreadcrumbShowcaseComponent } from './breadcrumb-showcase/breadcrumb-showcase.component';

@NgModule({
  declarations: [BreadcrumbShowcaseComponent],
  imports: [
    CommonModule,
    BreadcrumbSampleRoutingModule,
    BreadcrumbModule,
  ],
  exports: [BreadcrumbShowcaseComponent],
})
export class BreadcrumbSampleModule {
}
