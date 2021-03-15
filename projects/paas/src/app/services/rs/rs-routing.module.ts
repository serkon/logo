import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RsComponent } from '@paas/src/app/services/rs/rs.component';

const routes: Routes = [
  {path: '', component: RsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RsRoutingModule {
}
