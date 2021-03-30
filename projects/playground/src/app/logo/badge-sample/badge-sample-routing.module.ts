import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgeShowcaseComponent } from './badge-showcase/badge-showcase.component';

const routes: Routes = [
  {
    path: 'badge-showcase/badge-showcase.component',
    component: BadgeShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeSampleRoutingModule {
}
