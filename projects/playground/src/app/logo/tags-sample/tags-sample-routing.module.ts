import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TagsShowcaseComponent } from './tags-showcase/tags-showcase.component';

const routes: Routes = [
  {
    path: 'tags-showcase/tags-showcase.component',
    component: TagsShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsSampleRoutingModule {
}
