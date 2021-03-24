import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksModule } from '@logo-software/links';
import { CarouselModule } from '@logo-software/carousel';

import { UserReviewModule } from '@paas/src/components/user-review/user-review.module';
import { CoreServicesModule } from '@paas/src/components/core-services/core-services.module';
import { HeaderModule } from '@paas/src/components/header/header.module';
import { FooterModule } from '@paas/src/components/footer/footer.module';

import { JsRoutingModule } from './js-routing.module';
import { JsComponent } from './js.component';

@NgModule({
  declarations: [JsComponent],
  imports: [
    CommonModule,
    JsRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    LinksModule,
    UserReviewModule,
    CoreServicesModule,
  ],
  exports: [JsComponent],
})
export class JsModule {
}
