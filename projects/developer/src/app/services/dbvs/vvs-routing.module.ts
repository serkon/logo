import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VvsComponent } from '@developer/src/app/services/dbvs/vvs.component';

const routes: Routes = [
  {path: '', component: VvsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VvsRoutingModule {
}
