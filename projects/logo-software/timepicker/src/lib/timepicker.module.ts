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
import { FormsModule } from '@angular/forms';

import { PopoverModule } from '@logo-software/popover';

import { TimepickerComponent } from './timepicker.component';
import { MaskDirective } from './directive/mask.directive';

/**
 * Timepicker helps users select and set a specific time in your timesheet in 24-hour format.
 * It comes many features
 *
 * @stacked-example(TimepickerComponent, logo/timepicker-sample/timepicker-showcase/timepicker-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Timepicker Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/timepicker -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * import { TimepickerModule } from '@logo-software/timepicker';
 *
 * @NgModule({
 *  imports: [CommonModule, TimepickerModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [TimepickerComponent, MaskDirective],
  imports: [FormsModule, CommonModule, PopoverModule],
  exports: [TimepickerComponent],
})
export class TimepickerModule {
}
