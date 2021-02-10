import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalSampleRoutingModule } from './modal-sample-routing.module';
import { ModalShowcaseComponent } from './modal-showcase/modal-showcase.component';

@NgModule({
  declarations: [ModalShowcaseComponent],
  imports: [
    CommonModule,
    ModalSampleRoutingModule,
  ],
  exports: [ModalShowcaseComponent],
})
export class ModalSampleModule {
}
