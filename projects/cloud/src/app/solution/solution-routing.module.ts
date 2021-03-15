import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from '@cloud/app/solution/detail/detail.component';

const routes: Routes = [
  {
    path: ':query',
    component: DetailComponent,
  },
  {
    path: '',
    redirectTo: '/#solutions',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionRoutingModule {
}
