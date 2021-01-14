import { Component } from '@angular/core';
import { DrawerService } from '@logo-software/drawer';

@Component({
  selector: 'logo-drawer-showcase',
  templateUrl: './drawer-showcase.component.html',
  styleUrls: ['./drawer-showcase.component.scss'],
})
export class DrawerShowcaseComponent {

  constructor(private drawerService: DrawerService) {
  }

  close() {
    this.drawerService.menu = !this.drawerService.menu;
  }
}
