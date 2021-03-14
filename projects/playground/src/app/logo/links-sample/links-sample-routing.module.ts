import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LinksShowcaseComponent } from './links-showcase/links-showcase.component';

const routes: Routes = [
  {
    path: 'links-showcase/links-showcase.component',
    component: LinksShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinksSampleRoutingModule {
}
