import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImageSliderShowcaseComponent } from './image-slider-showcase/image-slider-showcase.component';

const routes: Routes = [
  {
    path: 'image-slider-showcase/image-slider-showcase.component',
    component: ImageSliderShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageSliderSampleRoutingModule {
}
