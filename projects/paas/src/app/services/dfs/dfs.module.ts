import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { CoreServicesModule } from '@paas/src/components/core-services/core-services.module';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { HeaderModule } from '@paas/src/components/header/header.module';

import { DfsRoutingModule } from './dfs-routing.module';
import { DfsComponent } from './dfs.component';

@NgModule({
  declarations: [DfsComponent],
  imports: [
    CommonModule,
    DfsRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    LinksModule,
    CoreServicesModule,
  ],
  exports: [DfsComponent],
})
export class DfsModule {
}
