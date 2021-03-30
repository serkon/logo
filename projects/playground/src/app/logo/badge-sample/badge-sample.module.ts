import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeSampleRoutingModule } from './badge-sample-routing.module';
import { BadgeShowcaseComponent } from './badge-showcase/badge-showcase.component';
import { BadgeModule } from '@logo-software/badge';

@NgModule({
  declarations: [BadgeShowcaseComponent],
  imports: [
    CommonModule,
    BadgeSampleRoutingModule,
    BadgeModule,
  ],
  exports: [BadgeShowcaseComponent],
})
export class BadgeSampleModule {
}
