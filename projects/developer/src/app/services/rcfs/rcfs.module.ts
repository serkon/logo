import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { UserReviewModule } from '@developer/src/components/user-review/user-review.module';
import { CoreServicesModule } from '@developer/src/components/core-services/core-services.module';
import { FooterModule } from '@developer/src/components/footer/footer.module';
import { HeaderModule } from '@developer/src/components/header/header.module';

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
