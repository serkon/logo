import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagingComponent } from './paging.component';

/**
 * The paging module splits your data collection into pages. The Table Module is can be given as a using sample.
 *
 * @stacked-example(Paging Showcase, logo/paging-sample/paging-showcase/paging-showcase.component)
 *
 * ### Installation
 *
 * All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Paging Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/paging -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *  imports: [CommonModule, PagingModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  declarations: [PagingComponent],
  imports: [CommonModule, FormsModule],
  exports: [PagingComponent],
})
export class PagingModule {
}
