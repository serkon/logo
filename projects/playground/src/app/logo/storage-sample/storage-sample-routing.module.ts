import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StorageShowcaseComponent } from './storage-showcase/storage-showcase.component';

const routes: Routes = [
  {
    path: 'storage-showcase/storage-showcase.component',
    component: StorageShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorageSampleRoutingModule {
}
