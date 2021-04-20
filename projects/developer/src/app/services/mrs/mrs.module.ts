import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MrsRoutingModule } from './mrs-routing.module';
import { MrsComponent } from './mrs.component';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { UserReviewModule } from '@developer/src/components/user-review/user-review.module';
import { CoreServicesModule } from '@developer/src/components/core-services/core-services.module';
import { FooterModule } from '@developer/src/components/footer/footer.module';
import { HeaderModule } from '@developer/src/components/header/header.module';

@NgModule({
  declarations: [MrsComponent],
  imports: [
    CommonModule,
    MrsRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    LinksModule,
    UserReviewModule,
    CoreServicesModule,
  ],
  exports: [MrsComponent],
})
export class MrsModule {
}
