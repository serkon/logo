import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkSampleRoutingModule } from './link-sample-routing.module';
import { LinkShowcaseComponent } from './link-showcase/link-showcase.component';
import { LinkModule } from '@logo-software/link';

@NgModule({
  declarations: [LinkShowcaseComponent],
  imports: [
    CommonModule,
    LinkSampleRoutingModule,
    LinkModule,
  ],
  exports: [LinkShowcaseComponent],
})
export class LinkSampleModule {
}
