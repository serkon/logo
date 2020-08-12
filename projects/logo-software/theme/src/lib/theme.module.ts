/*
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
import { ThemeComponent } from './theme.component';

/**
 * Theme module customize UI of the elements with Logo Design Standart. It also change bootstrap based projects to Logo Design Guide UI sytle.
 * Just import `scss` to your project main `style.scss`
 *
 * __Usage Example__
 *
 * <sub>style.scss</style>
 * ```scss
 * @import "~@logo-software/theme/style";
 * ```
 *
 * ### Installation
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Cursor Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/theme -s
 * ```
 */
@NgModule({
  imports: [CommonModule],
  declarations: [ThemeComponent],
  exports: [ThemeComponent],
})
export class ThemeModule {
}
