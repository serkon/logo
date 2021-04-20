import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { FooterModule } from '@developer/src/components/footer/footer.module';
import { HeaderModule } from '@developer/src/components/header/header.module';
import { CoreServicesModule } from '@developer/src/components/core-services/core-services.module';

import { HfsRoutingModule } from './hfs-routing.module';
import { HfsComponent } from './hfs.component';

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
