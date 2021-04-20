import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { FooterModule } from '@developer/src/components/footer/footer.module';
import { HeaderModule } from '@developer/src/components/header/header.module';
import { CoreServicesModule } from '@developer/src/components/core-services/core-services.module';
import { UserReviewModule } from '@developer/src/components/user-review/user-review.module';

import { LsRoutingModule } from './ls-routing.module';
import { LsComponent } from './ls.component';

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
