import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product/product.service';
import { SolutionService } from '../../services/solutions/solution.service';
import { HttpResponse, ProductSummary, SolutionSummary } from '../../../models/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'logo-cloud-footer',
  templateUrl: './cloud-footer.component.html',
  styleUrls: ['./cloud-footer.component.scss'],
})
export class CloudFooterComponent implements OnInit {
  public products: HttpResponse<ProductSummary>;
  public solutions: SolutionSummary;
  private solutionsData: Observable<HttpResponse<SolutionSummary>>;

  constructor(private productService: ProductService, private solutionsService: SolutionService) {
  }

  ngOnInit(): void {
    this.getProductNames();
    this.getSolutionNames();
  }

  private async getProductNames() {
    this.products = await this.productService.getProductSummaries();
  }

  private async getSolutionNames() {
    this.solutionsData = this.solutionsService.getSolutionSummaries();
    this.solutionsData.subscribe(res => {
      this.solutions = res.data;
    });
  }

}
