import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagingShowcaseComponent } from './paging-showcase/paging-showcase.component';

const routes: Routes = [
  {
    path: 'paging-showcase/paging-showcase.component',
    component: PagingShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagingSampleRoutingModule {
}
