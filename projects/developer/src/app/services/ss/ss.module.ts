import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksModule } from '@logo-software/links';
import { CarouselModule } from '@logo-software/carousel';

import { UserReviewModule } from '@developer/src/components/user-review/user-review.module';
import { CoreServicesModule } from '@developer/src/components/core-services/core-services.module';
import { HeaderModule } from '@developer/src/components/header/header.module';
import { FooterModule } from '@developer/src/components/footer/footer.module';
import { SsRoutingModule } from './ss-routing.module';
import { SsComponent } from './ss.component';

@NgModule({
  declarations: [SsComponent],
  imports: [
    CommonModule,
    SsRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    LinksModule,
    UserReviewModule,
    CoreServicesModule,
  ],
  exports: [SsComponent],
})
export class SsModule {
}
