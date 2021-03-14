import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb.component';

/**
 * A breadcrumb navigation provide links back to each previous page the user navigated through, and shows the user's current location in a website.
 *
 * @stacked-example(Breadcrumb Showcase, logo/breadcrumb-sample/breadcrumb-showcase/breadcrumb-showcase.component)
 *
 * ### Installation
 *
 * All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Breadcrumb Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/breadcrumb -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *   imports: [CommonModule, BreadcrumbModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {
}
