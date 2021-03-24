import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CcComponent } from './cc.component';

const routes: Routes = [
  {path: '', component: CcComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CcRoutingModule {
}
