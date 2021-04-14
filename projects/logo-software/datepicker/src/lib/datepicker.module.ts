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

import { DatepickerComponent } from './datepicker.component';
import { MaskDirective } from './directive/mask.directive';

/**
 * Datepickers let users select a date or range of dates. They should be suitable for the context in which they appear.
 *
 * @stacked-example(DatepickerComponent, logo/datepicker-sample/datepicker-showcase/datepicker-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Datepicker Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/datepicker -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * import { DatepickerModule } from '@logo-software/datepicker';
 *
 * @NgModule({
 *  imports: [CommonModule, DatepickerModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [DatepickerComponent, MaskDirective],
  imports: [FormsModule, CommonModule],
  exports: [DatepickerComponent, MaskDirective],
})
export class DatepickerModule {
}
