import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectSampleRoutingModule } from './select-sample-routing.module';
import { SelectShowcaseComponent } from './select-showcase/select-showcase.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SelectShowcaseComponent],
    imports: [
        CommonModule,
        SelectSampleRoutingModule,
        FormsModule,
    ],
  exports: [SelectShowcaseComponent],
})
export class SelectSampleModule { }
