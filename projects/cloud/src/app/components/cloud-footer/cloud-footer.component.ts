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

import { ProductService } from '@cloud/app/services/product/product.service';
import { HttpResponse, ProductSummary, SolutionSummary } from '@cloud/models/interfaces';
import { SolutionService } from '@cloud/app/services/solutions/solution.service';

@Component({
  selector: 'logo-cloud-footer',
  templateUrl: './cloud-footer.component.html',
  styleUrls: ['./cloud-footer.component.scss'],
})
export class CloudFooterComponent implements OnInit {
  public products: HttpResponse<ProductSummary[]>;
  public solutions: SolutionSummary[];
  private solutionsData: Observable<HttpResponse<SolutionSummary[]>>;

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
