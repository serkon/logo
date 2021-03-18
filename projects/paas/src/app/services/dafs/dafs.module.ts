import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { DafsRoutingModule } from './dafs-routing.module';
import { DafsComponent } from './dafs.component';
import {UserReviewModule} from '@paas/src/components/user-review/user-review.module';
import { CoreServicesModule } from '@paas/src/components/core-services/core-services.module';

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
