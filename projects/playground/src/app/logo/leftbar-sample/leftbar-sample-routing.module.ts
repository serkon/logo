import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeftbarShowcaseComponent } from './leftbar-showcase/leftbar-showcase.component';

const routes: Routes = [
  {
    path: 'leftbar-showcase/leftbar-showcase.component',
    component: LeftbarShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeftbarSampleRoutingModule {
}
