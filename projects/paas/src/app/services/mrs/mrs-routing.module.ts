import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MrsComponent } from '@paas/src/app/services/mrs/mrs.component';

const routes: Routes = [
  {path: '', component: MrsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MrsRoutingModule {
}
