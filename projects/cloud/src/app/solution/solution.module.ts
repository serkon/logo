import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from '@logo-software/breadcrumb';
import { LinksModule } from '@logo-software/links';
import { HeroModule } from '@logo-software/hero';
import { CarouselModule } from '@logo-software/carousel';
import { TabsModule } from '@logo-software/tabs';
import { AccordionModule } from '@logo-software/accordion';
import { PagingModule } from '@logo-software/paging';

import { ProductItemModule } from '@cloud/app/components/product-item/product-item.module';
import { DetailComponent } from '@cloud/app/solution/detail/detail.component';
import { CloudFooterModule } from '@cloud/app/components/cloud-footer/cloud-footer.module';
import { SpeedConnectModule } from '@cloud/app/components/speed-connect/speed-connect.module';
import { SolutionRoutingModule } from './solution-routing.module';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    SolutionRoutingModule,
    BreadcrumbModule,
    LinksModule,
    HeroModule,
    CarouselModule,
    ProductItemModule,
    TabsModule,
    CloudFooterModule,
    AccordionModule,
    PagingModule,
    SpeedConnectModule,
  ],
})
export class SolutionModule {
}
