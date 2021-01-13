import { Component } from '@angular/core';

/**
 * Drawer creates main layout of the application
 *
 * @stacked-example(Drawer Showcase, logo/drawer-sample/drawer-showcase/drawer-showcase.component)
 */
@Component({
  selector: 'logo-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  public menuClose = false;

  onClickHandler() {
    return this.menuClose = !this.menuClose;
  }
}
