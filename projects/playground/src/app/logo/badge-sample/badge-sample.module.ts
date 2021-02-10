import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeSampleRoutingModule } from './badge-sample-routing.module';
import { BadgeShowcaseComponent } from './badge-showcase/badge-showcase.component';

@NgModule({
  declarations: [BadgeShowcaseComponent],
  imports: [
    CommonModule,
    BadgeSampleRoutingModule,
  ],
  exports: [BadgeShowcaseComponent],
})
export class BadgeSampleModule { }
