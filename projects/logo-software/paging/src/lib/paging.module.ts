import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagingComponent } from './paging.component';

/**
 * Paging module uses when paging required like TableModule or ComboboxModule
 * Just import it to your project of @NgModule' import section
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

 */
@NgModule({
  declarations: [PagingComponent],
  imports: [CommonModule, FormsModule],
  exports: [PagingComponent],
})
export class PagingModule {
}
