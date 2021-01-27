import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DrawerComponent } from './drawer.component';

/**
 * The drawer creates the main layout of the application. There are 3 parts of the layout which include left, top, right sides.
 *
 * @stacked-example(Drawer Showcase, logo/drawer-sample/drawer-showcase/drawer-showcase.component)
 *
 * __Usage Example__
 *
 * ```typescript
 * @NgModule({
 *   ...
 *   imports: [CommonModule, DrawerModule],
 *   ...
 * })
 * export class AppModule {
 * }
 * ```
 *
 * ### Installation
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Drawer Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/drawer -s
 * ```
 */
@NgModule({
  declarations: [DrawerComponent],
  imports: [RouterModule, CommonModule],
  exports: [DrawerComponent],
})
export class DrawerModule {
}
