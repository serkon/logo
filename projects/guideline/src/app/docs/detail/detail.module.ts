import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from '@logo-software/markdown';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, DetailRoutingModule, MarkdownModule],
  exports: [DetailComponent],
})
export class DetailModule {
}
