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
import { BreadcrumbModule } from '@logo-software/breadcrumb';
import { LinksModule } from '@logo-software/links';
import { PagingModule } from '@logo-software/paging';
import { TagsModule } from '@logo-software/tags';
import { CarouselModule } from '@logo-software/carousel';
import { TabsModule } from '@logo-software/tabs';
import { ImageSliderModule } from '@logo-software/image-slider';
import { AccordionModule } from '@logo-software/accordion';

import { SpeedConnectModule } from '@cloud/app/components/speed-connect/speed-connect.module';
import { CloudFooterModule } from '@cloud/app/components/cloud-footer/cloud-footer.module';
import { ProductItemModule } from '@cloud/app/components/product-item/product-item.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HeroModule,
    BreadcrumbModule,
    LinksModule,
    SpeedConnectModule,
    PagingModule,
    CloudFooterModule,
    ProductItemModule,
    TagsModule,
    CarouselModule,
    TabsModule,
    LinksModule,
    ImageSliderModule,
    LinksModule,
    AccordionModule,
    CarouselModule,
    LinksModule,
    HeroModule,
    ImageSliderModule,
    LinksModule,
  ],
  exports: [ListComponent, DetailComponent],
})

export class ProductsModule {
}
