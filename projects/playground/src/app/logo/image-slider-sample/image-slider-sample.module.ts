import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageSliderSampleRoutingModule } from './image-slider-sample-routing.module';
import { ImageSliderShowcaseComponent } from './image-slider-showcase/image-slider-showcase.component';
import { ImageSliderModule } from '@logo-software/image-slider';

@NgModule({
  declarations: [ImageSliderShowcaseComponent],
  imports: [
    CommonModule,
    ImageSliderSampleRoutingModule,
    ImageSliderModule,
  ],
  exports: [ImageSliderShowcaseComponent],
})
export class ImageSliderSampleModule {
}
