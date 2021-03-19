import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsSampleRoutingModule } from './tags-sample-routing.module';
import { TagsShowcaseComponent } from './tags-showcase/tags-showcase.component';
import { TagsModule } from '@logo-software/tags';

@NgModule({
  declarations: [TagsShowcaseComponent],
  imports: [
    CommonModule,
    TagsSampleRoutingModule,
    TagsModule,
  ],
  exports: [TagsShowcaseComponent],
})
export class TagsSampleModule {
}
