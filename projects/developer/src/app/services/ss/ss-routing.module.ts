import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SsComponent } from '@developer/src/app/services/ss/ss.component';

const routes: Routes = [
  {path: '', component: SsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SsRoutingModule {
}
