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

  public BlogData: HttpResponse<BlogSummary[]>;
  public BlogSummaries: BlogSummary[];

  constructor(private blogService: BlogService, private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.headerService.isScrollSpy = true;
    this.loadBlogSummaries();
  }

  private async loadBlogSummaries() {
    this.BlogData = await this.blogService.getBlogSummary();
    this.BlogSummaries = this.BlogData.data;
  }

}
