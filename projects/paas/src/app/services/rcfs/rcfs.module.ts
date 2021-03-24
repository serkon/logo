import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { UserReviewModule } from '@paas/src/components/user-review/user-review.module';
import { CoreServicesModule } from '@paas/src/components/core-services/core-services.module';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { HeaderModule } from '@paas/src/components/header/header.module';

import { RcfsRoutingModule } from './rcfs-routing.module';
import { RcfsComponent } from './rcfs.component';

@NgModule({
  declarations: [RcfsComponent],
  imports: [
    CommonModule,
    RcfsRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    LinksModule,
    UserReviewModule,
    CoreServicesModule,
  ],
  exports: [RcfsComponent],
})
export class RcfsModule {
}
