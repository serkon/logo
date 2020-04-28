import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcelSampleRoutingModule } from './excel-sample-routing.module';
import { ExcelShowcaseComponent } from './excel-showcase/excel-showcase.component';
import { ExcelModule } from '@logo-software/excel';

@NgModule({
  declarations: [ExcelShowcaseComponent],
  imports: [
    CommonModule,
    ExcelSampleRoutingModule,
    ExcelModule,
  ],
})
export class ExcelSampleModule {
}
