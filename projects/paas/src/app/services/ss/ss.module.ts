import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksModule } from '@logo-software/links/src/lib/links.module';
import { CarouselModule } from '@logo-software/carousel';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { SsRoutingModule } from './ss-routing.module';
import { SsComponent } from './ss.component';

@NgModule({
  declarations: [SsComponent],
  imports: [
    CommonModule,
    SsRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    LinksModule,
  ],
  exports: [SsComponent],
})
export class SsModule {
}
