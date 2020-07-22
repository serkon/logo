import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdmRoutingModule } from './idm-routing.module';
import { IdmComponent } from './idm.component';
import { CarouselModule } from '@logo-software/carousel/src/lib/carousel.module';

@NgModule({
  declarations: [IdmComponent],
  imports: [
    CommonModule,
    IdmRoutingModule,
    CarouselModule,
  ],
  exports: [IdmComponent],
})
export class IdmModule {
}
