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
import { PagingModule } from '@logo-software/paging';
import { TabsModule } from '@logo-software/tabs';
import { CarouselModule } from '@logo-software/carousel';

import { CloudFooterModule } from '@cloud/app/components/cloud-footer/cloud-footer.module';
import { ProductItemModule } from '@cloud/app/components/product-item/product-item.module';
import { BlogRoutingModule } from './blog-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { SpeedConnectModule } from '@cloud/app/components/speed-connect/speed-connect.module';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CloudFooterModule,
    HeroModule,
    BreadcrumbModule,
    PagingModule,
    TabsModule,
    CarouselModule,
    ProductItemModule,
    SpeedConnectModule,
  ],
  exports: [ListComponent, DetailComponent],
})
export class BlogModule {
}
