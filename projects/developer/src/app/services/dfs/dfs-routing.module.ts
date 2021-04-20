import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DfsComponent } from '@developer/src/app/services/dfs/dfs.component';

const routes: Routes = [
  {path: '', component: DfsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DfsRoutingModule {
}
