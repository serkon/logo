import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerspectiveSampleRoutingModule } from './perspective-sample-routing.module';
import { PerspectiveShowcaseComponent } from './perspective-showcase/perspective-showcase.component';

@NgModule({
  declarations: [PerspectiveShowcaseComponent],
  imports: [
    CommonModule,
    PerspectiveSampleRoutingModule,
  ],
  exports: [PerspectiveShowcaseComponent],
})
export class PerspectiveSampleModule { }
