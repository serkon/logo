import { Component, OnInit } from '@angular/core';

import { HeaderService, HeaderTheme } from '@logo-software/header';
import { DrawerService } from '@logo-software/drawer';

@Component({
  selector: 'logo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(public headerService: HeaderService, public drawerService: DrawerService) {
  }

  ngOnInit(): void {
    this.headerService.isScrollSpy = true;
    this.headerService.setDefaultTheme(HeaderTheme.START);
    this.drawerService.isOpenerActive = false;
    this.drawerService.menu = true;
  }
}
