import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdmRoutingModule } from './idm-routing.module';
import { IdmComponent } from './idm.component';
import { CarouselModule } from '@logo-software/carousel/src/lib/carousel.module';
import { HeaderModule } from '../../../components/header/header.module';
import { FooterModule } from '../../../components/footer/footer.module';
import { LinksModule } from '@logo-software/link';

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
