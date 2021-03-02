import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroModule } from '@logo-software/hero';
import { CarouselModule } from '@logo-software/carousel';
import { CardModule } from '@logo-software/card';
import { LinksModule } from '@logo-software/links';
import { AccordionModule } from '@logo-software/accordion';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CloudFooterComponent } from '../components/cloud-footer/cloud-footer.component';
import { ProductItemComponent } from '../components/product-item/product-item.component';
import { PagingModule } from '@logo-software/paging';


@NgModule({
  declarations: [HomeComponent, CloudFooterComponent, ProductItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeroModule,
    CarouselModule,
    CardModule,
    LinksModule,
    LinksModule,
    LinksModule,
    CarouselModule,
    AccordionModule,
    PagingModule,
  ],
  exports: [HomeComponent, CloudFooterComponent, ProductItemComponent],
})
export class HomeModule {
}
