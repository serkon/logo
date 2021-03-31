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

import { SwitchComponent } from './switch.component';

/**
 * Switch toggle provides display checked/unchecked (On/Off) state on the button.
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Switch Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/switch -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * import { SwitchModule } from '@logo-software/switch';
 *
 * @NgModule({
 *  imports: [CommonModule, SwitchModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [SwitchComponent],
  imports: [CommonModule],
  exports: [SwitchComponent],
})
export class SwitchModule {
}
