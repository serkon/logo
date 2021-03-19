import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModalShowcaseComponent } from './modal-showcase/modal-showcase.component';

const routes: Routes = [
  {
    path: 'modal-showcase/modal-showcase.component',
    component: ModalShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSampleRoutingModule {
}
