import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsComponent } from '@paas/src/app/services/ms/ms.component';


const routes: Routes = [
  {path: '', component: MsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsRoutingModule {
}
