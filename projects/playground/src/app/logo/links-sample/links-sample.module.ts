import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksModule } from '@logo-software/links';

import { LinksSampleRoutingModule } from './links-sample-routing.module';
import { LinksShowcaseComponent } from './links-showcase/links-showcase.component';

@NgModule({
  declarations: [LinksShowcaseComponent],
  imports: [
    CommonModule,
    LinksSampleRoutingModule,
    LinksModule,
  ],
  exports: [LinksShowcaseComponent],
})
export class LinksSampleModule {
}
