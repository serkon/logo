import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonShowcaseComponent } from './button-showcase/button-showcase.component';

const routes: Routes = [
  {
    path: 'button-showcase/button-showcase.component',
    component: ButtonShowcaseComponent,
  },
  {
    path: 'button',
    component: ButtonShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonSampleRoutingModule {
}
