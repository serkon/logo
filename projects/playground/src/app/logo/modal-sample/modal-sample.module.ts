import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalSampleRoutingModule } from './modal-sample-routing.module';
import { ModalShowcaseComponent } from './modal-showcase/modal-showcase.component';
import { ModalModule } from '@logo-software/modal';

@NgModule({
  declarations: [ModalShowcaseComponent],
  imports: [
    CommonModule,
    ModalSampleRoutingModule,
    ModalModule,
  ],
  exports: [ModalShowcaseComponent],
})
export class ModalSampleModule {
}
