import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabSampleRoutingModule } from './tab-sample-routing.module';
import { TabShowcaseComponent } from './tab-showcase/tab-showcase.component';

@NgModule({
  declarations: [TabShowcaseComponent],
  imports: [
    CommonModule,
    TabSampleRoutingModule,
  ],
  exports: [TabShowcaseComponent],
})
export class TabSampleModule { }
