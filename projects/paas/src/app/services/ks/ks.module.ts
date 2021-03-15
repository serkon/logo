import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { KsRoutingModule } from './ks-routing.module';
import { KsComponent } from './ks.component';
import {CoreServicesModule} from '@paas/src/components/core-services/core-services.module';

@NgModule({
  declarations: [KsComponent],
    imports: [
        CommonModule,
        KsRoutingModule,
        HeaderModule,
        FooterModule,
        CarouselModule,
        LinksModule,
        CoreServicesModule,
    ],
  exports: [KsComponent],
})
export class KsModule {
}
