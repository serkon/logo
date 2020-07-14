import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorModule } from '@logo-software/cursor/src/lib/cursor.module';

import { CursorSampleRoutingModule } from './cursor-sample-routing.module';
import { CursorShowcaseComponent } from './cursor-showcase/cursor-showcase.component';


@NgModule({
  declarations: [CursorShowcaseComponent],
  imports: [
    CommonModule,
    CursorSampleRoutingModule,
    CursorModule,
  ],
  exports: [CursorShowcaseComponent],
})
export class CursorSampleModule {
}
