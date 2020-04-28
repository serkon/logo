/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderPipe } from './util/order.pipe';
import { LastDirective } from './util/last.directive';
import { FormatPipe } from './util/format.pipe';
import { TableComponent } from './table.component';
import { ExpanderComponent } from './expander.component';
import { PagingModule } from '@logo-software/paging';
import { ExcelModule } from '@logo-software/excel';

/**
 * Add TableModule to `import` section of the desired module's `@NgModule` annotation:
 *
 * ```typescript
 * import { LanguageModule } from '@logo-software/table';
 *
 * @NgModule({
 *  imports: [
 *    CommonModule,
 *    TableModule,
 *  ],
 * })
 * export class AppModule {
 * }
 * ```
 */
@NgModule({
  imports: [CommonModule, FormsModule, PagingModule, ExcelModule],
  declarations: [TableComponent, OrderPipe, LastDirective, FormatPipe, ExpanderComponent],
  exports: [TableComponent, ExpanderComponent],
})
export class TableModule {
  constructor(@Optional() @SkipSelf() parentModule: TableModule, @Optional() private http: HttpClient) {
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
        'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
