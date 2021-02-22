/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, OnInit } from '@angular/core';

import { HeaderService, HeaderTheme } from '@logo-software/header';
import { DrawerService } from '@logo-software/drawer';

@Component({
  selector: 'logo-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {

  constructor(public headerService: HeaderService, public drawerService: DrawerService) {
    this.headerService.isScrollSpy = false;
    this.headerService.setDefaultTheme(HeaderTheme.SCROLL);
    this.drawerService.isOpenerActive = false;
    this.drawerService.menu = false;
    this.headerService.mobileMenu = false;
  }

  ngOnInit(): void {
  }

}
