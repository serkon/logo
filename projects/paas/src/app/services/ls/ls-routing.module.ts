import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LsComponent } from '@paas/src/app/services/ls/ls.component';

const routes: Routes = [
  {path: '', component: LsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LsRoutingModule {
}
