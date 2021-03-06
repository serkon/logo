/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { HeaderService } from '@logo-software/header';
import { DrawerService } from '@logo-software/drawer';

@Component({
  selector: 'logo-example',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(public headerService: HeaderService, public drawerService: DrawerService) {
    this.drawerService.isOpenerActive = false;
    this.drawerService.menu = false;
    this.drawerService.hideHeader = true;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
