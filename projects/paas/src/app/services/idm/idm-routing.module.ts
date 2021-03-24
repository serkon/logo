import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdmComponent } from './idm.component';

const routes: Routes = [
  {path: '', component: IdmComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdmRoutingModule {
}
