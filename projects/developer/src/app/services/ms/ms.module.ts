import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { FooterModule } from '@developer/src/components/footer/footer.module';
import { HeaderModule } from '@developer/src/components/header/header.module';

import { MsRoutingModule } from './ms-routing.module';
import { MsComponent } from './ms.component';
import { UserReviewModule } from '@developer/src/components/user-review/user-review.module';
import { CoreServicesModule } from '@developer/src/components/core-services/core-services.module';

@NgModule({
  declarations: [MsComponent],
  imports: [
    CommonModule,
    MsRoutingModule,
    HeaderModule,
    CarouselModule,
    LinksModule,
    FooterModule,
    UserReviewModule,
    CoreServicesModule,
  ],
  exports: [MsComponent],
})
export class MsModule {
}
