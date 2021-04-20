import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { HeaderModule } from '@developer/src/components/header/header.module';
import { FooterModule } from '@developer/src/components/footer/footer.module';

import { IdmRoutingModule } from './idm-routing.module';
import { IdmComponent } from './idm.component';

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
