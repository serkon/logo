import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { IdmRoutingModule } from './idm-routing.module';
import { IdmComponent } from './idm.component';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { FooterModule } from '@paas/src/components/footer/footer.module';

@NgModule({
  declarations: [IdmComponent],
  imports: [
    CommonModule,
    IdmRoutingModule,
    CarouselModule,
    HeaderModule,
    FooterModule,
    LinksModule,
  ],
  exports: [IdmComponent],
})
export class IdmModule {
}
