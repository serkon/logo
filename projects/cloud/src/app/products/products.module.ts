import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroModule } from '@logo-software/hero';
import { BreadcrumbModule } from '@logo-software/breadcrumb';
import { LinksModule } from '@logo-software/links';
import { PagingModule } from '@logo-software/paging';

import { SpeedConnectModule } from '@cloud/app/components/speed-connect/speed-connect.module';
import { CloudFooterModule } from '@cloud/app/components/cloud-footer/cloud-footer.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HeroModule,
    BreadcrumbModule,
    LinksModule,
    SpeedConnectModule,
    PagingModule,
    CloudFooterModule,
  ],
  exports: [ListComponent],
})
export class ProductsModule {
}
