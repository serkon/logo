import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkSampleRoutingModule } from './link-sample-routing.module';
import { LinkShowcaseComponent } from './link-showcase/link-showcase.component';
import { LinksModule } from '@logo-software/links';

@NgModule({
  declarations: [LinkShowcaseComponent],
  imports: [
    CommonModule,
    LinkSampleRoutingModule,
    LinksModule,
  ],
  exports: [LinkShowcaseComponent],
})
export class LinkSampleModule {
}
