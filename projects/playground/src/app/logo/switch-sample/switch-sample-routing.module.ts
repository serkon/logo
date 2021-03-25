import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SwitchShowcaseComponent } from './switch-showcase/switch-showcase.component';

const routes: Routes = [
  {
    path: 'switch-showcase/switch-showcase.component',
    component: SwitchShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwitchSampleRoutingModule {
}
