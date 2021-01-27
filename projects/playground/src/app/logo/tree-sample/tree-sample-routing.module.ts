import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TreeShowcaseComponent } from './tree-showcase/tree-showcase.component';

const routes: Routes = [
  {
    path: 'tree-showcase/tree-showcase.component',
    component: TreeShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreeSampleRoutingModule {
}
