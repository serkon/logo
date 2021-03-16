import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardShowcaseComponent } from './card-showcase/card-showcase.component';

const routes: Routes = [
  {
    path: 'card-showcase/card-showcase.component',
    component: CardShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardSampleRoutingModule {
}
