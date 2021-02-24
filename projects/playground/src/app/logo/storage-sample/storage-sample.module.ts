import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageSampleRoutingModule } from './storage-sample-routing.module';
import { StorageShowcaseComponent } from './storage-showcase/storage-showcase.component';

@NgModule({
  declarations: [StorageShowcaseComponent],
  imports: [
    CommonModule,
    StorageSampleRoutingModule,
  ],
  exports: [StorageShowcaseComponent],
})
export class StorageSampleModule { }
