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

import { ProgressBarComponent } from './progress-bar.component';

/**
 * A progress bar shows the user where they are along the steps of their process journey.
 * It comes many features
 *
 * @stacked-example(ProgressBarComponent, logo/progress-bar-sample/progress-bar-showcase/progress-bar-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Progress Bar Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/progress-bar -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * import { ProgressBarModule } from '@logo-software/progress-bar';
 *
 * @NgModule({
 *  imports: [CommonModule, ProgressBarModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [ProgressBarComponent],
  imports: [
    CommonModule,
  ],
  exports: [ProgressBarComponent],
})
export class ProgressBarModule {
}
