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
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PopoverComponent } from './popover.component';

/**
 * Powerful popover library, which provides the best UX for your users. It shows the small modals over the content
 *
 * It comes with the features below:
 * * Logo theme support.
 * * Search support.
 * * Service based on-the-go support.
 *
 * @stacked-example(PopoverComponent, logo/popover-sample/popover-showcase/popover-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Popover Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/popover -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * import { PopoverModule } from '@logo-software/popover';
 *
 * @NgModule({
 *  imports: [PopoverModule],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [PopoverComponent],
  imports: [FormsModule, CommonModule],
  exports: [PopoverComponent],
})
export class PopoverModule {
}
