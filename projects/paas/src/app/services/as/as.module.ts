import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsRoutingModule } from './as-routing.module';
import { AsComponent } from './as.component';
import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { HeaderModule } from '@paas/src/components/header/header.module';


@NgModule({
  declarations: [AsComponent],
  imports: [CommonModule, AsRoutingModule, HeaderModule, FooterModule, CarouselModule, LinksModule],
  exports: [AsComponent],
})
export class AsModule {
}
