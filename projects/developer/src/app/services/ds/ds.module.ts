import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { DsRoutingModule } from './ds-routing.module';
import { DsComponent } from './ds.component';

import { CoreServicesModule } from '@developer/src/components/core-services/core-services.module';
import { UserReviewModule } from '@developer/src/components/user-review/user-review.module';
import { FooterModule } from '@developer/src/components/footer/footer.module';
import { HeaderModule } from '@developer/src/components/header/header.module';

@NgModule({
  declarations: [DsComponent],
  imports: [
    CommonModule,
    DsRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    LinksModule,
    CoreServicesModule,
    UserReviewModule,
  ],
  exports: [DsComponent],
})
export class DsModule {
}
