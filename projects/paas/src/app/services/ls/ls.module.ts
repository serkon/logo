import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';
import { FooterModule } from '@paas/src/components/footer/footer.module';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { LsRoutingModule } from './ls-routing.module';
import { LsComponent } from './ls.component';
import {CoreServicesModule} from '@paas/src/components/core-services/core-services.module';
import {UserReviewModule} from '@paas/src/components/user-review/user-review.module';

@NgModule({
  declarations: [LsComponent],
    imports: [
        CommonModule,
        LsRoutingModule,
        HeaderModule,
        FooterModule,
        CarouselModule,
        LinksModule,
        CoreServicesModule,
        UserReviewModule,
    ],
  exports: [LsComponent],
})
export class LsModule {
}
