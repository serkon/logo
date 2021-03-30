import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SwitchSampleRoutingModule } from './switch-sample-routing.module';
import { SwitchShowcaseComponent } from './switch-showcase/switch-showcase.component';
import { SwitchModule } from '../../../../../logo-software/switch/src/lib/switch.module';

@NgModule({
  declarations: [SwitchShowcaseComponent],
  imports: [
    CommonModule,
    SwitchSampleRoutingModule,
    SwitchModule,
    FormsModule,
  ],
  exports: [SwitchShowcaseComponent],
})
export class SwitchSampleModule {
}
