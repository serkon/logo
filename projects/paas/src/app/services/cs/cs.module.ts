import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksModule } from '@logo-software/links';
import { CarouselModule } from '@logo-software/carousel';

import { UserReviewModule } from '@paas/src/components/user-review/user-review.module';
import { CoreServicesModule } from '@paas/src/components/core-services/core-services.module';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { CsRoutingModule } from './cs-routing.module';
import { CsComponent } from './cs.component';

@NgModule({
  declarations: [CsComponent],
  imports: [
    CommonModule,
    CsRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    LinksModule,
    UserReviewModule,
    CoreServicesModule,
  ],
  exports: [CsComponent],
})
export class CsModule {
}
