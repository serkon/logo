import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { VvsRoutingModule } from './vvs-routing.module';
import { VvsComponent } from './vvs.component';

@NgModule({
  declarations: [VvsComponent],
  imports: [
    CommonModule,
    VvsRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    LinksModule,
  ],
  exports: [VvsComponent],
})
export class VvsModule {
}
