import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsRoutingModule } from './as-routing.module';
import { AsComponent } from './as.component';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { CarouselModule } from '@logo-software/carousel';


@NgModule({
  declarations: [AsComponent],
  imports: [CommonModule, AsRoutingModule, HeaderModule, FooterModule, CarouselModule],
  exports: [AsComponent],
})
export class AsModule {
}
