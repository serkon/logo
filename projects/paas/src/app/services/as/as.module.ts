import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { FooterModule } from '@paas/src/components/footer/footer.module';
import { HeaderModule } from '@paas/src/components/header/header.module';

import { AsRoutingModule } from './as-routing.module';
import { AsComponent } from './as.component';

@NgModule({
  declarations: [AsComponent],
  imports: [CommonModule, AsRoutingModule, HeaderModule, FooterModule, CarouselModule, LinksModule],
  exports: [AsComponent],
})
export class AsModule {
}
