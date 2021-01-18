import { AfterContentChecked, ChangeDetectorRef, Compiler, Component } from '@angular/core';
import { DrawerService } from '@logo-software/drawer';

import { HeaderService } from './components/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked {

  constructor(private compiler: Compiler, private drawerService: DrawerService, public headerService: HeaderService, private cdr: ChangeDetectorRef) {
    this.headerService.setHeaderTitle('Home');
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }

  close() {
    this.drawerService.menu = !this.drawerService.menu;
  }

}
