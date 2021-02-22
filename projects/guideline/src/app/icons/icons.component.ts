import { Component, OnInit } from '@angular/core';

import { HeaderService, HeaderTheme } from '@logo-software/header';
import { DrawerService } from '@logo-software/drawer';

@Component({
  selector: 'logo-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {

  public docFileName: string = 'icon';
  public docExtension: string = 'mdx';

  constructor(private headerService: HeaderService, private drawerService: DrawerService) {
    this.headerService.setDefaultTheme(HeaderTheme.SCROLL);
    this.headerService.isScrollSpy = false;
    this.drawerService.menu = false;
  }

  ngOnInit(): void {
    this.headerService.mobileMenu = false;
  }

}
