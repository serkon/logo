import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroModule } from '@logo-software/hero';
import { BreadcrumbModule } from '@logo-software/breadcrumb';
import { LinksModule } from '@logo-software/links';
import { PagingModule } from '@logo-software/paging';
import { TagsModule } from '@logo-software/tags';

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
  ],
  exports: [ListComponent, DetailComponent],
})

export class ProductsModule {
}
