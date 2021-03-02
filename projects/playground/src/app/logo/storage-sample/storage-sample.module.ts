import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { STORAGE_TYPES, StorageModule } from '@logo-software/storage';

import { StorageSampleRoutingModule } from './storage-sample-routing.module';
import { StorageShowcaseComponent } from './storage-showcase/storage-showcase.component';

@NgModule({
  declarations: [StorageShowcaseComponent],
  imports: [
    CommonModule,
    StorageSampleRoutingModule,
    StorageModule.forRoot(STORAGE_TYPES.LOCAL),
  ],
  exports: [StorageShowcaseComponent],
})
export class StorageSampleModule { }
