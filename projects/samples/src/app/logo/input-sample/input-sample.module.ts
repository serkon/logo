import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputSampleRoutingModule } from './input-sample-routing.module';
import { InputShowcaseComponent } from './input-showcase/input-showcase.component';
import { InputModule } from '@logo-software/input/src/lib/input.module';


@NgModule({
  declarations: [InputShowcaseComponent],
  imports: [
    CommonModule,
    InputSampleRoutingModule,
    InputModule,
  ],
})
export class InputSampleModule {
}
