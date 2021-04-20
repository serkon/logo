import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { CoreServicesModule } from '@developer/src/components/core-services/core-services.module';
import { FooterModule } from '@developer/src/components/footer/footer.module';
import { HeaderModule } from '@developer/src/components/header/header.module';

import { DbvsRoutingModule } from './dbvs-routing.module';
import { DbvsComponent } from './dbvs.component';

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
export class DbvsModule {
}
