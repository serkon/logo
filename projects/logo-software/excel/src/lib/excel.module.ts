import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcelComponent } from './excel.component';

/**
 * Any given data or any service returned data can be exportable with this component to Excel.
 *
 * ### Installation
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Excel Module:
 *
 *   ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/excel -s
 * ```
 *
 *__Usage Example__
 *
 * ```typescript
 * import { NgModule } from '@angular/core';
 * import { CommonModule } from '@angular/common';
 * import { ExcelModule } from '@logo-software/excel';
 *
 * @NgModule({
 *   declarations: [SampleComponent],
 *   imports: [CommonModule, ExcelModule],
 *   exports: [SampleComponent],
 * })
 * export class SampleModule {
 * }
 * ```
 * ### Dependencies ###
 *   While installing @logo-software/excel, package manager also will be installing these packages as a dependency:
 *   * file-saver
 *   * xmlbuilder
 */
@NgModule({
  declarations: [ExcelComponent],
  imports: [CommonModule],
  exports: [ExcelComponent],
})
export class ExcelModule {
}
