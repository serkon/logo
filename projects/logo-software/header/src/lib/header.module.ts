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
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';

/**
 * Header module adds a header area to the top of the landing page and manages its content. Header module supports responsive web design.
 * It comes many features
 *
 * @stacked-example(HeaderComponent, logo/header-sample/header-showcase/header-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Header Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/header -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *  imports: [CommonModule, HeaderModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {
}
