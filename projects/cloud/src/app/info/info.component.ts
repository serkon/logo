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
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { HeaderService } from '@logo-software/header';

import { HttpResponse, InfoData } from '@cloud/models/interfaces';

@Component({
  selector: 'logo-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  public infos: HttpResponse<InfoData>;
  private infoPage: string;

  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.infoPage = this.route.snapshot.params.name;
  }

  ngOnInit(): void {
    this.headerService.isScrollSpy = true;
    this.getPageData();
  }

  private async getPageData() {
    this.infos = await this.getInfoPage(this.infoPage);
  }

  private getInfoPage(name: string) {
    return this.http.get<HttpResponse<InfoData>>(`/assets/data/json/info-${name}.json`).toPromise().then(response => {
      return response;
    });
  }
}
