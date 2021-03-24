import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DbvsComponent } from '@paas/src/app/services/dbvs/dbvs.component';

const routes: Routes = [
  {path: '', component: DbvsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DbvsRoutingModule {
}
