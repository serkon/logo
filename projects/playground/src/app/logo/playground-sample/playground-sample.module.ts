import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundSampleRoutingModule } from './playground-sample-routing.module';
import { PlaygroundShowcaseComponent } from './playground-showcase/playground-showcase.component';

@NgModule({
  declarations: [PlaygroundShowcaseComponent],
  imports: [
    CommonModule,
    PlaygroundSampleRoutingModule,
  ],
  exports: [PlaygroundShowcaseComponent],
})
export class PlaygroundSampleModule { }
