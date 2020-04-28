import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableSampleRoutingModule } from './table-sample-routing.module';
import { TableShowcaseComponent } from './table-showcase/table-showcase.component';
import { TableModule } from '@logo-software/table';

@NgModule({
  declarations: [TableShowcaseComponent],
  imports: [CommonModule, TableSampleRoutingModule, TableModule],
  exports: [TableShowcaseComponent],
})
export class TableSampleModule {
}
