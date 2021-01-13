import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DrawerComponent } from './drawer.component';

/**
 * Drawer creates main layout of the application
 *
 * @stacked-example(Drawer Showcase, logo/drawer-sample/drawer-showcase/drawer-showcase.component)
 */
@NgModule({
  declarations: [DrawerComponent],
  imports: [RouterModule, CommonModule],
  exports: [DrawerComponent],
})
export class DrawerModule {
}
