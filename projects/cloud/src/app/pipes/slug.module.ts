import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlugPipe } from '@cloud/app/pipes/slug.pipe';

@NgModule({
  declarations: [SlugPipe],
  imports: [CommonModule],
  exports: [SlugPipe],
})
export class SlugModule {
}
