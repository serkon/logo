import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsShowcaseComponent } from './tabs-showcase/tabs-showcase.component';

const routes: Routes = [
  {
    path: 'tabs-showcase/tabs-showcase.component',
    component: TabsShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsSampleRoutingModule {
}
