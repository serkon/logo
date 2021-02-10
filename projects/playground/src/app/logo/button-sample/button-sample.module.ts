import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonSampleRoutingModule } from './button-sample-routing.module';
import { ButtonShowcaseComponent } from './button-showcase/button-showcase.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ButtonShowcaseComponent],
    imports: [
        CommonModule,
        ButtonSampleRoutingModule,
        FormsModule,
    ],
  exports: [ButtonShowcaseComponent],
})
export class ButtonSampleModule { }
