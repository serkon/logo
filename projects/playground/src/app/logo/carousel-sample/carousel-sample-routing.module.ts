import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselShowcaseComponent } from '@playground/carousel-sample/carousel-showcase/carousel-showcase.component';


const routes: Routes = [
  {
    path: 'carousel-showcase/carousel-showcase.component',
    component: CarouselShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarouselSampleRoutingModule {
}
