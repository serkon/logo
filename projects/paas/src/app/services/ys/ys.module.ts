import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { YsRoutingModule } from './ys-routing.module';
import { YsComponent } from './ys.component';
import {CoreServicesModule} from '@paas/src/components/core-services/core-services.module';

@NgModule({
  declarations: [YsComponent],
    imports: [
        CommonModule,
        YsRoutingModule,
        HeaderModule,
        FooterModule,
        CarouselModule,
        LinksModule,
        CoreServicesModule,
    ],
  exports: [YsComponent],
})
export class YsModule {
}
