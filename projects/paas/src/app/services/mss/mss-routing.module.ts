import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MssComponent } from '@paas/src/app/services/mss/mss.component';

const routes: Routes = [
  {path: '', component: MssComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MssRoutingModule {
}
