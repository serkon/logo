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
import { Observable } from 'rxjs';

import { HeaderService } from '@logo-software/header';

import { BlogSummary, FAQ, HttpResponse, ProductSummary, SolutionSummary, Testimonial } from '@cloud/models/interfaces';
import { SolutionService } from '@cloud/app/services/solutions/solution.service';
import { ProductService } from '@cloud/app/services/product/product.service';
import { TestimonialsService } from '@cloud/app/services/testimonials/testimonials.service';
import { FaqService } from '@cloud/app/services/faq/faq.service';
import { BlogService } from '@cloud/app/services/blog/blog.service';

@Component({
  selector: 'logo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public blogData: HttpResponse<BlogSummary[]>;
  public productSummaries: ProductSummary[];
  public blogSummaries: BlogSummary[];
  public testimonials: Testimonial;
  public solutionSummaries: SolutionSummary[];
  public faqs: FAQ;
  private productSummaryData: HttpResponse<ProductSummary[]>;
  private testimonialsData: HttpResponse<Testimonial>;
  private solutionSummaryData: Observable<HttpResponse<SolutionSummary[]>>;
  private faqData: HttpResponse<FAQ>;

  constructor(
    private solutionService: SolutionService,
    private productService: ProductService,
    private testimonialsService: TestimonialsService,
    private faqService: FaqService,
    private blogService: BlogService,
    private headerService: HeaderService,
  ) {
  }

  ngOnInit(): void {
    this.headerService.isScrollSpy = true;
    this.loadSolutionSummaries();
    this.loadProductSummaries();
    this.loadTestimonials();
    this.loadFaqs();
    this.loadblogSummaries();
  }

  private async loadSolutionSummaries() {
    this.solutionSummaryData = this.solutionService.getSolutionSummaries();
    this.solutionSummaryData.subscribe(res => {
      this.solutionSummaries = res.data;
    });
  }

  private async loadProductSummaries() {
    this.productSummaryData = await this.productService.getProductSummaries();
    this.productSummaries = this.productSummaryData.data;
  }

  private async loadTestimonials() {
    this.testimonialsData = await this.testimonialsService.getTestimonials();
    this.testimonials = this.testimonialsData.data;
  }

  private async loadFaqs() {
    this.faqData = await this.faqService.getFaqs();
    this.faqs = this.faqData.data;
  }

  private async loadblogSummaries() {
    this.blogData = await this.blogService.getBlogSummary();
    this.blogSummaries = this.blogData.data;
  }

}
