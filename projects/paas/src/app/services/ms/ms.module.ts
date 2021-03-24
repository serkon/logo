import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { FooterModule } from '@paas/src/components/footer/footer.module';
import { HeaderModule } from '@paas/src/components/header/header.module';

import { MsRoutingModule } from './ms-routing.module';
import { MsComponent } from './ms.component';

@NgModule({
  declarations: [MsComponent],
  imports: [
    CommonModule,
    MsRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    LinksModule,
  ],
  exports: [MsComponent],
})
export class MsModule {
}
