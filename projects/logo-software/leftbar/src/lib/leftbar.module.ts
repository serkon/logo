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
import { RouterModule } from '@angular/router';

import { LinksModule } from '@logo-software/links';

import { LeftbarComponent } from './leftbar.component';

/**
 * Leftbar is part of the Logo Elements Environment. This library is a navigational part of the apps and shared by products within a platform. It provides a common set of interaction patterns that persist between and across products also standartization of navigation between apps and user information presentation.
 *
 * It comes with the features below:
 * * Configurable by Restful API.
 * * Slim mode.
 * * Customizable menu area.
 * * Shortcut support
 *
 * @stacked-example(LeftbarComponent, logo/leftbar-sample/leftbar-showcase/leftbar-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Leftbar Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/leftbar -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *  imports: [CommonModule, LeftbarModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [LeftbarComponent],
  imports: [RouterModule, CommonModule, LinksModule],
  exports: [LeftbarComponent],
})
export class LeftbarModule {
}
