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

import { HeroComponent } from './hero.component';

/**
 * Hero module is a lightweight, flexible component that can optionally extend the first viewable section to showcase key marketing messages on your site.
 * It comes with the features below:
 * * Custom CSS Class support.
 * * Container class support.
 * * Set background image dynamically.
 * * Custom inner content design.
 * * Overlay support between content and background.
 *
 * @stacked-example(HeroComponent, logo/hero-sample/hero-showcase/hero-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Hero Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/hero -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *  imports: [CommonModule, HeroModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
  ],
  exports: [HeroComponent],
})
export class HeroModule {
}
