import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagingComponent } from './paging.component';

/**
 * Paging module uses when paging required like TableModule or ComboboxModule
 * Just import it to your project of @NgModule' import section
 *
 * @stacked-example(Paging Showcase, logo/paging-sample/paging-showcase/paging-showcase.component)
 *
 * __Usage Example__
 *
 * ```typescript
 * @NgModule({
 *   declarations: [PagingComponent],
 *   imports: [CommonModule, PagingModule],
 * })
 * export class AppModule {
 * }
 * ```
 *
 * ### Installation
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Paging Module:
 *
 *   ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/paging -s
 * ```
 */
@NgModule({
  declarations: [PagingComponent],
  imports: [CommonModule, FormsModule],
  exports: [PagingComponent],
})
export class PagingModule {
}
