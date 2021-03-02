import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BlogSummary, FAQ, HttpResponse, ProductSummary, SolutionSummary, Testimonial } from '../../models/interfaces';
import { SolutionService } from '../services/solutions/solution.service';
import { ProductService } from '../services/product/product.service';
import { TestimonialsService } from '../services/testimonials/testimonials.service';
import { FaqService } from '../services/faq/faq.service';
import { BlogService } from '../services/blog/blog.service';

@Component({
  selector: 'logo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public SolutionSummaries: SolutionSummary;
  public ProductSummaries: ProductSummary;
  public Testimonials: Testimonial;
  public Faqs: FAQ;
  public BlogData: HttpResponse<BlogSummary>;
  public BlogSummaries: BlogSummary;
  private SolutionSummaryData: Observable<HttpResponse<SolutionSummary>>;
  private ProductSummaryData: HttpResponse<ProductSummary>;
  private TestimonialsData: HttpResponse<Testimonial>;
  private FaqData: HttpResponse<FAQ>;

  constructor(
    private solutionService: SolutionService,
    private productService: ProductService,
    private testimonialsService: TestimonialsService,
    private faqService: FaqService,
    private blogService: BlogService,
  ) {
  }

  ngOnInit(): void {
    this.loadSolutionSummaries();
    this.loadProductSummaries();
    this.loadTestimonials();
    this.loadFaqs();
    this.loadBlogSummaries();
  }

  private async loadSolutionSummaries() {
    this.SolutionSummaryData = this.solutionService.getSolutionSummaries();
    this.SolutionSummaryData.subscribe(res => {
      this.SolutionSummaries = res.data;
    });
  }

  private async loadProductSummaries() {
    this.ProductSummaryData = await this.productService.getProductSummaries();
    this.ProductSummaries = this.ProductSummaryData.data;
  }

  private async loadTestimonials() {
    this.TestimonialsData = await this.testimonialsService.getTestimonials();
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

}
