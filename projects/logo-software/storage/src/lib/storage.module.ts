import { ModuleWithProviders, NgModule, Optional } from '@angular/core';

import { StorageComponent } from './storage.component';
import { STORAGE_TYPE_CONFIG, STORAGE_TYPES, StorageFactory, StorageService } from './storage.service';

export let StorageClass: StorageService = null;

@NgModule({
  declarations: [StorageComponent],
  imports: [],
  exports: [StorageComponent],
})
export class StorageModule {
  constructor(@Optional() private storageService: StorageService) {
    StorageClass = this.storageService || new StorageService();
  }

  static forRoot(storageTypes?: STORAGE_TYPES): ModuleWithProviders<StorageModule> {
    return {
      ngModule: StorageModule,
      providers: [
        {provide: STORAGE_TYPE_CONFIG, useValue: storageTypes || STORAGE_TYPES.SESSION},
        {provide: StorageService, useFactory: StorageFactory, deps: [STORAGE_TYPE_CONFIG]},
      ],
    };
  }
}
