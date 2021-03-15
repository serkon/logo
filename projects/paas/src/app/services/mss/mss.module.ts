import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { MssRoutingModule } from './mss-routing.module';
import { MssComponent } from './mss.component';
import { UserReviewModule } from '@paas/src/components/user-review/user-review.module';
import { CoreServicesModule } from '@paas/src/components/core-services/core-services.module';

@NgModule({
  declarations: [MssComponent],
  imports: [
    CommonModule,
    MssRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    LinksModule,
    UserReviewModule,
    CoreServicesModule,
  ],
  exports: [MssComponent],
})
export class MssModule {
}
