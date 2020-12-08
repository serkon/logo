import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselSampleRoutingModule } from './carousel-sample-routing.module';
import { CarouselShowcaseComponent } from './carousel-showcase/carousel-showcase.component';
import { CarouselModule } from '@logo-software/carousel';


@NgModule({
  declarations: [CarouselShowcaseComponent],
  imports: [
    CommonModule,
    CarouselSampleRoutingModule,
    CarouselModule,
  ],
  exports: [CarouselShowcaseComponent],
})
export class CarouselSampleModule {
}
