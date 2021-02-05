import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PlaygroundComponent } from './playground.component';

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [CommonModule, RouterModule],
  providers: [],
  exports: [PlaygroundComponent],
})
export class PlaygroundModule {
}
