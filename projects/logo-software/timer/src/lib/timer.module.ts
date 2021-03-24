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

import { ProgressBarModule } from '@logo-software/progress-bar';

import { TimerComponent } from './timer.component';
import { TimeModule } from './pipe/time.module';

/**
 * Timer helps developer to set a specific time for their web apps and doSomething after completed.
 * It comes many features
 *
 * @stacked-example(TimerComponent, logo/timer-sample/timer-showcase/timer-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Timer Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/timer -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * import { TimerModule } from '@logo-software/timer';
 *
 * @NgModule({
 *  imports: [CommonModule, TimerModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [TimerComponent],
  imports: [
    TimeModule,
    CommonModule,
    ProgressBarModule,
  ],
  exports: [TimerComponent],
})
export class TimerModule {
}
