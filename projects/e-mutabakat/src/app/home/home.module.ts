import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroModule } from '@logo-software/hero';
import { ImageSliderModule } from '@logo-software/image-slider';
import { TabsModule } from '@logo-software/tabs';
import { CarouselModule } from '@logo-software/carousel';
import { PagingModule } from '@logo-software/paging';
import { LinksModule } from '@logo-software/links';
import { AccordionModule } from '@logo-software/accordion';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeroModule,
    ImageSliderModule,
    TabsModule,
    CarouselModule,
    PagingModule,
    LinksModule,
    ImageSliderModule,
    TabsModule,
    AccordionModule,
    LinksModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {
}
