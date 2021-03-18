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

import { PlaygroundComponent } from './playground.component';

/**
 * Playground module shows given path inside a iframe. So you can show any component inside in. It will helps you quickly display component usage in the documents.
 *
 * @stacked-example(Playground Showcase, logo/playground-sample/playground-showcase/playground-showcase.component)
 *
 * ### Installation
 *
 * All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Playground Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/playground -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *  imports: [CommonModule, PlaygroundModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [PlaygroundComponent],
  imports: [CommonModule, RouterModule],
  providers: [],
  exports: [PlaygroundComponent],
})
export class PlaygroundModule {
}
