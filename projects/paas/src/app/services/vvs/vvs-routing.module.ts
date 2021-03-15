import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VvsComponent } from '@paas/src/app/services/vvs/vvs.component';

const routes: Routes = [
  {path: '', component: VvsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VvsRoutingModule {
}
