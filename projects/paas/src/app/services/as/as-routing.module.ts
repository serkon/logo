import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsComponent } from '@paas/src/app/services/as/as.component';

const routes: Routes = [
  {path: '', component: AsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsRoutingModule {
}
