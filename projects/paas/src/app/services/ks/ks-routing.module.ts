import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KsComponent } from '@paas/src/app/services/ks/ks.component';

const routes: Routes = [
  {path: '', component: KsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KsRoutingModule {
}
