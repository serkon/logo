import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { UserReviewModule } from '@paas/src/components/user-review/user-review.module';
import { RsRoutingModule } from './rs-routing.module';
import { RsComponent } from './rs.component';
import { ServicesModule } from '@paas/src/app/services/services.module';
import { CoreServicesModule } from '@paas/src/components/core-services/core-services.module';


@NgModule({
  declarations: [RsComponent],
  imports: [
    CommonModule,
    RsRoutingModule,
    HeaderModule,
    UserReviewModule,
    FooterModule,
    CarouselModule,
    LinksModule,
    ServicesModule,
    CoreServicesModule,
  ],
  exports: [RsComponent],
})
export class RsModule {
}
