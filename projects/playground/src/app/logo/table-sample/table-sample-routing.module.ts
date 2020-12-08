import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableShowcaseComponent } from './table-showcase/table-showcase.component';

const routes: Routes = [
  {
    path: 'table-showcase/table-showcase.component',
    component: TableShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableSampleRoutingModule {
}
