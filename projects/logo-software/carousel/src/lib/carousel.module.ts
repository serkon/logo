import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';

/**
 * The Carousel module is a component for cycling through elements, like a carousel (slideshow).
 * Just import it to your project of @NgModule' import section
 *
 * __Usage Example__
 *
 * ```typescript
 * @NgModule({
 *   ...
 *   imports: [CommonModule, CarouselModule],
 *   ...
 * })
 * export class AppModule {
 * }
 * ```
 *
 * ### Installation
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Carousel Module:
 *
 *   ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/link -s
 * ```
 */
@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule],
  exports: [CarouselComponent],
})
export class CarouselModule {
}
