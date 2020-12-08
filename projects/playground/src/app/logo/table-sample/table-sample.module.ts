import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableSampleRoutingModule } from './table-sample-routing.module';
import { TableShowcaseComponent } from './table-showcase/table-showcase.component';
import { TableModule } from '@logo-software/table';
import { ToastModule, ToastService } from '@logo-software/toast';

@NgModule({
  declarations: [TableShowcaseComponent],
  imports: [CommonModule, TableSampleRoutingModule, TableModule, ToastModule],
  providers: [ToastService],
  exports: [TableShowcaseComponent],
})
export class TableSampleModule {
}
