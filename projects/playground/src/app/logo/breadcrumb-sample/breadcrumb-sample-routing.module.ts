import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbShowcaseComponent } from './breadcrumb-showcase/breadcrumb-showcase.component';

const routes: Routes = [
  {
    path: 'breadcrumb-showcase/breadcrumb-showcase.component',
    component: BreadcrumbShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbSampleRoutingModule {
}
