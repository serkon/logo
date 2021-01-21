import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksModule } from '@logo-software/links';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from '../../../../logo-software/carousel/src/lib/carousel.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LinksModule,
    CarouselModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {
}
