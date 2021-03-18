/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageSliderComponent } from './image-slider.component';

/**
 * Image Slider is a image viewer library for cycling through a series of images. It also includes support for previous/next controls and thumbnails.
 *
 * It comes with the features below:
 * * Thumbnail support.
 * * On Image change, image specific output.
 * * Auto scrollable thumbnails.
 * * Mobile support.
 *
 * @stacked-example(ImageSliderComponent, logo/image-slider-sample/image-slider-showcase/image-slider-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Image Slider Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/image-slider -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *  imports: [CommonModule, ImageSliderModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [ImageSliderComponent],
  imports: [CommonModule],
  exports: [ImageSliderComponent],
})
export class ImageSliderModule {
}
