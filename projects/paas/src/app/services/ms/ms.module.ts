import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsRoutingModule } from './ms-routing.module';
import { MsComponent } from './ms.component';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/link';

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
