import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { CoreServicesModule } from '@developer/src/components/core-services/core-services.module';
import { FooterModule } from '@developer/src/components/footer/footer.module';
import { HeaderModule } from '@developer/src/components/header/header.module';
import { UserReviewModule } from '@developer/src/components/user-review/user-review.module';

import { RdfRoutingModule } from './rdf-routing.module';
import { RdfComponent } from './rdf.component';

@NgModule({
  declarations: [RdfComponent],
  imports: [
    CommonModule,
    RdfRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    LinksModule,
    CoreServicesModule,
    UserReviewModule,
  ],
  exports: [RdfComponent],
})
export class RdfModule {
}
