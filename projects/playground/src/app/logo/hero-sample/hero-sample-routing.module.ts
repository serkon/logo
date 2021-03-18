import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroShowcaseComponent } from './hero-showcase/hero-showcase.component';

const routes: Routes = [
  {
    path: 'hero-showcase/hero-showcase.component',
    component: HeroShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroSampleRoutingModule {
}
