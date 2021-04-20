import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { UserReviewModule } from '@developer/src/components/user-review/user-review.module';
import { FooterModule } from '@developer/src/components/footer/footer.module';
import { HeaderModule } from '@developer/src/components/header/header.module';
import { CoreServicesModule } from '@developer/src/components/core-services/core-services.module';

import { DafsRoutingModule } from './dafs-routing.module';
import { DafsComponent } from './dafs.component';

@NgModule({
  declarations: [DafsComponent],
  imports: [
    CommonModule,
    DafsRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    LinksModule,
    UserReviewModule,
    CoreServicesModule,
  ],
  exports: [DafsComponent],
})
export class DafsModule {
}
