import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from '@logo-software/tabs';

import { TabsSampleRoutingModule } from './tabs-sample-routing.module';
import { TabsShowcaseComponent } from './tabs-showcase/tabs-showcase.component';

@NgModule({
  declarations: [TabsShowcaseComponent],
  imports: [CommonModule, TabsSampleRoutingModule, TabsModule],
  exports: [TabsShowcaseComponent],
})
export class TabsSampleModule {
}
