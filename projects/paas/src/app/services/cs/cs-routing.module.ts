import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsComponent } from '@paas/src/app/services/cs/cs.component';

const routes: Routes = [
  {path: '', component: CsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsRoutingModule {
}
