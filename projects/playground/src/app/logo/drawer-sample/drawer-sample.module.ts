import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from '@logo-software/drawer';

import { DrawerSampleRoutingModule } from './drawer-sample-routing.module';
import { DrawerShowcaseComponent } from './drawer-showcase/drawer-showcase.component';

@NgModule({
  declarations: [DrawerShowcaseComponent],
  imports: [CommonModule, DrawerSampleRoutingModule, DrawerModule],
  exports: [DrawerShowcaseComponent],
})

export class DrawerSampleModule {
}
