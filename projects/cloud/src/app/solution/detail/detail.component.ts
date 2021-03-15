import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { HeaderService } from '@logo-software/header';

import { BlogService } from '@cloud/app/services/blog/blog.service';
import { ProductService } from '@cloud/app/services/product/product.service';
import { SolutionService } from '@cloud/app/services/solutions/solution.service';
import { BlogSummary, FAQ, HttpResponse, ProductSummary, Solution, Testimonial } from '@cloud/models/interfaces';
import { TestimonialsService } from '@cloud/app/services/testimonials/testimonials.service';
import { FaqService } from '@cloud/app/services/faq/faq.service';

@Component({
  selector: 'logo-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public solutionResponse: HttpResponse<Solution[]>;
  public solutionData: Solution;
  public productSummaries: ProductSummary[];
  public faqs: FAQ;
  public testimonials: Testimonial;
  public blogData: HttpResponse<BlogSummary[]>;
  public blogSummaries: BlogSummary[];
  private slug: string;
  private productSummaryData: HttpResponse<ProductSummary[]>;
  private faqData: HttpResponse<FAQ>;
  private testimonialsData: HttpResponse<Testimonial>;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private headerService: HeaderService,
    private productService: ProductService,
    private solutionService: SolutionService,
    private domSanitizer: DomSanitizer,
    private testimonialsService: TestimonialsService,
    private faqService: FaqService,
  ) {
    this.slug = this.route.snapshot.params.query;
  }

  ngOnInit(): void {
    this.headerService.isScrollSpy = true;
    this.loadSolutionDetail();
    this.loadProductSummaries();
    this.loadFaqs();
    this.loadTestimonials();
    this.loadblogSummaries();
  }

  public sanitizer(image: string) {
    return this.domSanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  private async loadSolutionDetail() {
    this.solutionResponse = await this.solutionService.getSolutionDetail(this.slug);
    this.solutionData = this.solutionResponse.data[0];
    (this.solutionData);
  }

  private async loadProductSummaries() {
    this.productSummaryData = await this.productService.getProductSummaries();
    this.productSummaries = this.productSummaryData.data;
  }

  private async loadFaqs() {
    this.faqData = await this.faqService.getFaqs();
    this.faqs = this.faqData.data;
  }

  private async loadTestimonials() {
    this.testimonialsData = await this.testimonialsService.getTestimonials();
    this.testimonials = this.testimonialsData.data;
  }

  private async loadblogSummaries() {
    this.blogData = await this.blogService.getBlogSummary();
    this.blogSummaries = this.blogData.data;
  }
}
