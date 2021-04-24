import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { FooterModule } from '@developer/src/components/footer/footer.module';
import { HeaderModule } from '@developer/src/components/header/header.module';
import { UserReviewModule } from '@developer/src/components/user-review/user-review.module';
import { AsRoutingModule } from './as-routing.module';
import { AsComponent } from './as.component';
import { CoreServicesModule } from '../../../components/core-services/core-services.module';

@NgModule({
  declarations: [AsComponent],
  imports: [CommonModule, AsRoutingModule, HeaderModule, FooterModule, CarouselModule, LinksModule, UserReviewModule, CoreServicesModule],
  exports: [AsComponent],
})
export class AsModule {
}
