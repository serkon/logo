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
import { TableComponent } from './table.component';
import { ExpanderComponent } from './expander.component';
import { ExcelModule } from '@logo-software/excel';
import { CoreModule } from '@logo-software/core';
import { PagingModule } from '@logo-software/paging';

/**
 * This module generates a table using the given data. The table can generate data using server-side Http requests or given
 * direct data using the client-side feature.
 *
 * @stacked-example(Table Showcase, logo/table-sample/table-showcase/table-showcase.component)
 *
 * ### Installation
 *
 * All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Table Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/table -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *  imports: [CommonModule, TableModule]
 *})
 * export class AppModule {
 *}
 * ```
 *
 */
@NgModule({
  imports: [CommonModule, FormsModule, PagingModule, ExcelModule, CoreModule],
  declarations: [TableComponent, ExpanderComponent],
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
