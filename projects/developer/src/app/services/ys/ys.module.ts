import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { FooterModule } from '@developer/src/components/footer/footer.module';
import { HeaderModule } from '@developer/src/components/header/header.module';
import { CoreServicesModule } from '@developer/src/components/core-services/core-services.module';

import { YsRoutingModule } from './ys-routing.module';
import { YsComponent } from './ys.component';

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
