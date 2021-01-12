import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownSampleRoutingModule } from './markdown-sample-routing.module';
import { MarkdownShowcaseComponent } from './markdown-showcase/markdown-showcase.component';

@NgModule({
  declarations: [MarkdownShowcaseComponent],
  imports: [
    CommonModule,
    MarkdownSampleRoutingModule,
  ],
  exports: [MarkdownShowcaseComponent],
})
export class MarkdownSampleModule { }
