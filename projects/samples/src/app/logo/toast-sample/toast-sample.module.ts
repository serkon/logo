import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastSampleRoutingModule } from './toast-sample-routing.module';
import { ToastSampleComponent } from './toast-sample.component';


@NgModule({
  declarations: [ToastSampleComponent],
  imports: [
    CommonModule,
    ToastSampleRoutingModule,
  ],
  exports: [ToastSampleComponent],
})
export class ToastSampleModule {
}
