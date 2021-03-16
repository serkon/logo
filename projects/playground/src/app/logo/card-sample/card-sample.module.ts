import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksModule } from '@logo-software/links';
import { CardModule } from '@logo-software/card';

import { CardSampleRoutingModule } from './card-sample-routing.module';
import { CardShowcaseComponent } from './card-showcase/card-showcase.component';

@NgModule({
  declarations: [CardShowcaseComponent],
  imports: [CommonModule, CardSampleRoutingModule, LinksModule, CardModule],
  exports: [CardShowcaseComponent],
})
export class CardSampleModule {
}
