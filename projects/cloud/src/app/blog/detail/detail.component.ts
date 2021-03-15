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
import { ActivatedRoute } from '@angular/router';

import { HeaderService } from '@logo-software/header';

import { Blog, HttpResponse, ProductSummary } from '@cloud/models/interfaces';
import { BlogService } from '@cloud/app/services/blog/blog.service';
import { ProductService } from '@cloud/app/services/product/product.service';

@Component({
  selector: 'logo-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public blogData: Blog;
  public ProductSummaries: ProductSummary[];
  private blogResponse: HttpResponse<Blog[]>;
  private slug: string;
  private ProductSummaryData: HttpResponse<ProductSummary[]>;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private headerService: HeaderService,
    private productService: ProductService,
  ) {
    this.slug = this.route.snapshot.params.query;
  }

  ngOnInit(): void {
    this.headerService.isScrollSpy = true;
    this.loadBlogDetail();
    this.loadProductSummaries();
  }

  private async loadBlogDetail() {
    this.blogResponse = await this.blogService.getBlogDetail(this.slug);
    this.blogData = this.blogResponse.data[0];
  }

  private async loadProductSummaries() {
    this.ProductSummaryData = await this.productService.getProductSummaries();
    this.ProductSummaries = this.ProductSummaryData.data;
  }
}
