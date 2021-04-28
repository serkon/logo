import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingModule } from '@logo-software/loading';

import { LoadingSampleRoutingModule } from './loading-sample-routing.module';
import { LoadingShowcaseComponent } from './loading-showcase/loading-showcase.component';

@NgModule({
  declarations: [LoadingShowcaseComponent],
  imports: [
    CommonModule,
    LoadingSampleRoutingModule,
    LoadingModule,
  ],
  exports: [LoadingShowcaseComponent],
})
export class LoadingSampleModule {
}
