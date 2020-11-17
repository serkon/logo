import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { CcRoutingModule } from './cc-routing.module';
import { CcComponent } from './cc.component';
import { LinksModule } from '@logo-software/links';

@NgModule({
  declarations: [CcComponent],
  imports: [CommonModule, CcRoutingModule, HeaderModule, FooterModule, CarouselModule, LinksModule],
  exports: [CcComponent],
})
export class CcModule {
}
