import { NgModule } from '@angular/core';
import { ImageSliderComponent } from './image-slider.component';
import { CommonModule } from '@angular/common';

// @ts-ignore
@NgModule({
  declarations: [ImageSliderComponent],
  imports: [
    CommonModule,
  ],
  exports: [ImageSliderComponent],
})
export class ImageSliderModule {
}
