import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { HeaderModule } from '@developer/src/components/header/header.module';
import { FooterModule } from '@developer/src/components/footer/footer.module';

import { CcRoutingModule } from './cc-routing.module';
import { CcComponent } from './cc.component';
import { UserReviewModule } from '../../../components/user-review/user-review.module';
import { CoreServicesModule } from '../../../components/core-services/core-services.module';

@NgModule({
  declarations: [CcComponent],
  imports: [CommonModule, CcRoutingModule, HeaderModule, FooterModule, CarouselModule, LinksModule, UserReviewModule, CoreServicesModule],
  exports: [CcComponent],
})
export class CcModule {
}
