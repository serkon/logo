import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from '@logo-software/drawer';
import { TreeModule } from '@logo-software/tree';

import { TreeSampleRoutingModule } from './tree-sample-routing.module';
import { TreeShowcaseComponent } from './tree-showcase/tree-showcase.component';

@NgModule({
  declarations: [TreeShowcaseComponent],
  imports: [CommonModule, TreeSampleRoutingModule, TreeModule, DrawerModule],
  exports: [TreeShowcaseComponent],
})
export class TreeSampleModule {
}
