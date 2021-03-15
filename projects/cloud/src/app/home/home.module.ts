/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroModule } from '@logo-software/hero';
import { CarouselModule } from '@logo-software/carousel';
import { CardModule } from '@logo-software/card';
import { LinksModule } from '@logo-software/links';
import { AccordionModule } from '@logo-software/accordion';
import { PagingModule } from '@logo-software/paging';

import { CloudFooterModule } from '@cloud/app/components/cloud-footer/cloud-footer.module';
import { ProductItemModule } from '@cloud/app/components/product-item/product-item.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeroModule,
    CarouselModule,
    CardModule,
    LinksModule,
    CarouselModule,
    AccordionModule,
    PagingModule,
    CloudFooterModule,
    ProductItemModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {
}
