import { Component } from '@angular/core';
import { DrawerService } from '../../../logo-software/drawer/src/lib/drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'guideline';

  constructor(private drawerService: DrawerService) {
  }

  close() {
    this.drawerService.menu = !this.drawerService.menu;
  }
}
