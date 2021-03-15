import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { HfsRoutingModule } from './hfs-routing.module';
import { HfsComponent } from './hfs.component';
import {CoreServicesModule} from '@paas/src/components/core-services/core-services.module';

@NgModule({
  declarations: [HfsComponent],
    imports: [
        CommonModule,
        HfsRoutingModule,
        HeaderModule,
        FooterModule,
        CarouselModule,
        LinksModule,
        CoreServicesModule,
    ],
  exports: [HfsComponent],
})
export class HfsModule {
}
