import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerspectiveShowcaseComponent } from './perspective-showcase/perspective-showcase.component';

const routes: Routes = [
  {
    path: 'perspective-showcase/perspective-showcase.component',
    component: PerspectiveShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerspectiveSampleRoutingModule {
}
