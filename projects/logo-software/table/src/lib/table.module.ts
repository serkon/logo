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
 * This module generates a table using the given data. The table can generate data using server-side Http requests or given direct data using the client-side feature.
 *
 * @stacked-example(Table Showcase, logo/table-sample/table-showcase/table-showcase.component)
 *
 * First import `TableModule` to your target module imports section. In this example, we add AppModule for display table at `app.component.ts`
 *
 * <sub>**app.module.ts**</sub>
 *
 * ```typescript
 * import { LanguageInitSetting, LanguageModule } from '@logo-software/language';
 * import { NgModule } from '@angular/core';
 * import { AppComponent } from './app.component';
 *
 * import { TableModule } from '@logo-software/table';
 *
 * @NgModule({
 *   declarations: [AppComponent],
 *   imports: [TableModule],
 *   providers: [],
 *   bootstrap: [AppComponent]
 * })
 * export class AppModule {
 * }
 * ```
 *
 * ### Installation
 * There are three steps:
 *
 *  - Install package using
 *
 *    ```typescript
 *      npm install @logo-software/table
 *    ```
 *
 *  - Add `TableModule` to target module imports
 *
 *    ```typescript
 *    @NgModule({
 *      imports: [BrowserModule, TableModule]
 *    })
 *    ```
 *
 *  - Open `angular.json` and add below code to `YOUR_PROJECT_NAME.architect.build.options.assets` path to make images available of TableModule.
 *
 *    ```JSON
 *     {
 *      "glob": "**\/*",
 *      "input": "node_modules/@logo-software/table/src/lib/assets/icons",
 *      "output": "assets/icons"
 *     }
 *    ```
 *    It will be end of this like:
 *
 *    <sub>angular.json</sub>
 *    ```JSON
 *     {
 *      "outputPath": "dist/logo-ng-library",
 *      "index": "src/index.html",
 *      "main": "src/main.ts",
 *      "polyfills": "src/polyfills.ts",
 *      "tsConfig": "src/tsconfig.app.json",
 *      "assets": [
 *        "src/favicon.ico",
 *        "src/assets",
 *        {
 *          "glob": "**\/*",
 *          "input": "node_modules/@logo-software/table/src/lib/assets/icons",
 *          "output": "assets/icons"
 *        }
 *      ],
 *      "styles": [
 *        "src/styles.scss"
 *      ],
 *      "scripts": []
 *     }
 *    ```
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
