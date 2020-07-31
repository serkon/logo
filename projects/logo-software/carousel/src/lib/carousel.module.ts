import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';

/**
 * The Carousel plugin is a component for cycling through elements, like a carousel (slideshow).
 */
@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule],
  exports: [CarouselComponent],
})
export class CarouselModule {
}
