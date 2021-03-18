/**
 * @license
 * Copyright Logo Yazılım. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Logo Yazılım.
 * Any reproduction of this material must contain this notice.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastComponent } from './toast.component';

/**
 * Toast messages inform users of a process that an app has performed or will perform.
 * They appear temporarily, towards the right top of the screen.
 * They shouldn’t interrupt the user experience, and they don’t require user input to disappear.
 * Optionally, it accepts options from outside.
 *
 * @stacked-example(Toast Showcase, logo/toast-sample/toast-showcase/toast-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Toast Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/toast -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * <sub>app.module.ts</sub>
 *
 * ```typescript
 * @NgModule({
 *   imports: [ToastModule],
 *   providers: [ToastService]
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  imports: [CommonModule],
  declarations: [ToastComponent],
  exports: [ToastComponent],
})
export class ToastModule {
}
