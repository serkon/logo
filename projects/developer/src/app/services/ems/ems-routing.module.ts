import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmsComponent } from '@developer/src/app/services/ems/ems.component';

const routes: Routes = [
  {path: '', component: EmsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmsRoutingModule {
}
