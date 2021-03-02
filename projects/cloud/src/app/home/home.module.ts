import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroModule } from '@logo-software/hero';
import { CarouselModule } from '@logo-software/carousel';
import { CardModule } from '@logo-software/card';
import { LinksModule } from '@logo-software/links';
import { AccordionModule } from '@logo-software/accordion';
import { PagingModule } from '@logo-software/paging';

import { CloudFooterComponent } from '@cloud/app/components/cloud-footer/cloud-footer.component';
import { ProductItemComponent } from '@cloud/app/components/product-item/product-item.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


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
