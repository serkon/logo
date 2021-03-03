import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdmSampleRoutingModule } from './idm-sample-routing.module';
import { IdmShowcaseComponent } from './idm-showcase/idm-showcase.component';

@NgModule({
  declarations: [IdmShowcaseComponent],
  imports: [
    CommonModule,
    IdmSampleRoutingModule,
  ],
  exports: [IdmShowcaseComponent],
})
export class IdmSampleModule {
}
