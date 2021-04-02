import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PopoverShowcaseComponent } from './popover-showcase/popover-showcase.component';

const routes: Routes = [
  {
    path: 'popover-showcase/popover-showcase.component',
    component: PopoverShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverSampleRoutingModule {
}
