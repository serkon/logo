import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { FooterModule } from '@developer/src/components/footer/footer.module';
import { HeaderModule } from '@developer/src/components/header/header.module';
import { UserReviewModule } from '@developer/src/components/user-review/user-review.module';
import { ServicesModule } from '@developer/src/app/services/services.module';
import { CoreServicesModule } from '@developer/src/components/core-services/core-services.module';

import { RsRoutingModule } from './rs-routing.module';
import { RsComponent } from './rs.component';

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
