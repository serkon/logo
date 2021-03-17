import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderShowcaseComponent } from './header-showcase/header-showcase.component';

const routes: Routes = [
  {
    path: 'header-showcase/header-showcase.component',
    component: HeaderShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderSampleRoutingModule {
}
