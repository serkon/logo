import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule, ToastService } from '@logo-software/toast';
import { ToastSampleRoutingModule } from './toast-sample-routing.module';
import { ToastShowcaseComponent } from './toast-showcase/toast-showcase.component';

@NgModule({
  declarations: [ToastShowcaseComponent],
  imports: [
    CommonModule,
    ToastSampleRoutingModule,
    ToastModule,
  ],
  providers: [ToastService],
  exports: [ToastShowcaseComponent],
})
export class ToastSampleModule {
}
