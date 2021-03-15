import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RcfsComponent } from '@paas/src/app/services/rcfs/rcfs.component';

const routes: Routes = [
  {path: '', component: RcfsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RcfsRoutingModule {
}
