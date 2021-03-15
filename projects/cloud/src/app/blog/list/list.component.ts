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
import { HeaderService } from '@logo-software/header';

import { BlogSummary, HttpResponse } from '@cloud/models/interfaces';
import { BlogService } from '@cloud/app/services/blog/blog.service';

@Component({
  selector: 'logo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  public blogData: HttpResponse<BlogSummary[]>;
  public blogSummaries: BlogSummary[];

  constructor(private blogService: BlogService, private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.headerService.isScrollSpy = true;
    this.loadblogSummaries();
  }

  private async loadblogSummaries() {
    this.blogData = await this.blogService.getBlogSummary();
    this.blogSummaries = this.blogData.data;
  }

}
