import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DsComponent } from '@developer/src/app/services/ds/ds.component';

const routes: Routes = [
  {path: '', component: DsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DsRoutingModule {
}
