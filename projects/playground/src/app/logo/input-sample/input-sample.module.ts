import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputSampleRoutingModule } from './input-sample-routing.module';
import { InputShowcaseComponent } from './input-showcase/input-showcase.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [InputShowcaseComponent],
    imports: [
        CommonModule,
        InputSampleRoutingModule,
        FormsModule,
    ],
  exports: [InputShowcaseComponent],
})
export class InputSampleModule { }
