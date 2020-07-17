import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PerspectiveModule } from '@logo-software/perspective';
import { CarouselModule } from '@logo-software/carousel';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PerspectiveModule,
    CarouselModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {
}
