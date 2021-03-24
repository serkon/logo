import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { DbvsRoutingModule } from './dbvs-routing.module';
import { DbvsComponent } from './dbvs.component';
import { CoreServicesModule } from '@paas/src/components/core-services/core-services.module';

@NgModule({
  declarations: [DbvsComponent],
  imports: [
    CommonModule,
    DbvsRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    LinksModule,
    CoreServicesModule,
  ],
  exports: [DbvsComponent],
})
export class DbvsModule {}
