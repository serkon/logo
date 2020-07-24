import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { CcRoutingModule } from './cc-routing.module';
import { CcComponent } from './cc.component';

@NgModule({
  declarations: [CcComponent],
  imports: [CommonModule, CcRoutingModule, HeaderModule, FooterModule, CarouselModule],
  exports: [CcComponent],
})
export class CcModule {
}
