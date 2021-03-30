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

import { BadgeComponent } from './badge.component';

/**
 * A badge is a visual indicator for informational values such as tallies, scores and tags.
 * It comes many features
 * * Icon Support
 * * Icon Position Support
 * * Size Support
 * * Logo Theme Support
 *
 * @stacked-example(BadgeComponent, logo/badge-sample/badge-showcase/badge-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Badge Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/badge -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * import { BadgeModule } from '@logo-software/badge';
 *
 * @NgModule({
 *  imports: [CommonModule, BadgeModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [BadgeComponent],
  imports: [
    CommonModule,
  ],
  exports: [BadgeComponent],
})

export class BadgeModule {
}
