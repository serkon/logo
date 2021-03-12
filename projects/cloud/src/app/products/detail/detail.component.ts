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
import { fromEvent } from 'rxjs';

import { HeaderService } from '@logo-software/header';

import {
  BlogSummary,
  FAQ,
  HttpResponse,
  PackageType,
  Product,
  ProductScreenFeatures,
  ProductSticker,
  ProductSummary,
  Reference,
  Testimonial,
} from '@cloud/models/interfaces';
import { ProductService } from '@cloud/app/services/product/product.service';
import { TestimonialsService } from '@cloud/app/services/testimonials/testimonials.service';
import { FaqService } from '@cloud/app/services/faq/faq.service';
import { BlogService } from '@cloud/app/services/blog/blog.service';

@Component({
  selector: 'logo-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public productSlug: string;
  public product: Product;
  public Testimonials: Testimonial[];
  public Faqs: FAQ;
  public BlogData: HttpResponse<BlogSummary>;
  public BlogSummaries: BlogSummary;
  public ProductSummaries: ProductSummary[];
  public isStickyTabs: boolean = false;
  public appScreens: string[] = [];
  public imageData: ProductScreenFeatures;
  public productSticker: HttpResponse<ProductSticker[]>;
  public productReferences: HttpResponse<Reference[]>;
  private productData: HttpResponse<Product[]>;
  private TestimonialsData: HttpResponse<Testimonial[]>;
  private FaqData: HttpResponse<FAQ>;
  private ProductSummaryData: HttpResponse<ProductSummary[]>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private testimonialsService: TestimonialsService,
    private faqService: FaqService,
    private blogService: BlogService,
    private headerService: HeaderService,
  ) {
    this.productSlug = this.route.snapshot.params.slug;
  }

  ngOnInit(): void {
    this.headerService.isScrollSpy = false;
    this.getDetails();
    this.loadTestimonials();
    this.loadFaqs();
    this.loadBlogSummaries();
    this.loadProductSummaries();

    const scroll$ = fromEvent(window, 'scroll');
    scroll$.subscribe(dir => {
      const scrollPos = window.pageYOffset;
      this.isStickyTabs = (scrollPos >= 330) ? true : false;
    });
  }

  public getImageContent(index: number) {
    this.imageData = this.product.screens[index];
  }

  public getMonthlyPackages() {
    return this.product.packages.filter((p) => {
      return p.type === PackageType.MONTHLY;
    });
  }

  public getYearlyPackages() {
    return this.product.packages.filter((p) => {
      return p.type === PackageType.YEARLY;
    });
  }

  private async getDetails() {
    this.productData = await this.productService.getProductDetail(this.productSlug);
    this.product = this.productData.data[0];
    this.productSticker = await this.productService.getProductSticker(this.product.id);
    this.setScreens(this.product.screens);
    this.productReferences = await this.productService.getProductReferences(this.product.id);
    console.log(this.product);
  }

  private setScreens(data) {
    data.forEach((val) => {
      this.appScreens.push(val.image);
    });
    this.getImageContent(0);
  }

  private async loadTestimonials() {
    // this.TestimonialsData = await this.testimonialsService.getTestimonials();
    this.TestimonialsData = await this.testimonialsService.getTestimonialsDummyData();
    this.Testimonials = this.TestimonialsData.data;
  }

  private async loadFaqs() {
    this.FaqData = await this.faqService.getFaqs();
    this.Faqs = this.FaqData.data;
  }

  private async loadBlogSummaries() {
    this.BlogData = await this.blogService.getBlogSummary();
    this.BlogSummaries = this.BlogData.data;
  }

  private async loadProductSummaries() {
    this.ProductSummaryData = await this.productService.getProductSummaries();
    this.ProductSummaries = this.ProductSummaryData.data;
  }
}
