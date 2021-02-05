/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '@logo-software/header';
import { DrawerService } from '@logo-software/drawer';

import { DocsService } from '../docs.service';

@Component({
  selector: 'logo-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, AfterViewInit {

  public docFileName: string;
  public docExtension: string = 'mdx';

  constructor(public docsService: DocsService, public headerService: HeaderService, public drawerService: DrawerService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramChanges();
  }

  ngAfterViewInit() {
    this.headerService.isScrollSpy = false;
    this.headerService.setDefaultTheme('darked');
    this.drawerService.isOpenerActive = true;
    this.drawerService.menu = false;
  }

  paramChanges() {
    this.route.paramMap.subscribe(params => {
      this.docFileName = params.get('name');
    });
  }
}
