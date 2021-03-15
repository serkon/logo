import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafsComponent } from '@paas/src/app/services/dafs/dafs.component';

const routes: Routes = [
  {path: '', component: DafsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DafsRoutingModule {
}
