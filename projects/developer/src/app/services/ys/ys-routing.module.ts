import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { YsComponent } from '@developer/src/app/services/ys/ys.component';

const routes: Routes = [
  {path: '', component: YsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YsRoutingModule {
}
