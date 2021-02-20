import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroModule } from '@logo-software/hero';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from '@logo-software/carousel';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeroModule,
    CarouselModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {
}
