import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastSampleRoutingModule } from './toast-sample-routing.module';
import { ToastShowcaseComponent } from './toast-showcase.component';

@NgModule({
  declarations: [ToastShowcaseComponent],
  imports: [
    CommonModule,
    ToastSampleRoutingModule,
  ],
  exports: [ToastShowcaseComponent],
})
export class ToastSampleModule {
}
