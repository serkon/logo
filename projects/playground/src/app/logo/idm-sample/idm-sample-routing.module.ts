import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdmShowcaseComponent } from './idm-showcase/idm-showcase.component';

const routes: Routes = [
  {
    path: 'idm-showcase/idm-showcase.component',
    component: IdmShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdmSampleRoutingModule {
}
