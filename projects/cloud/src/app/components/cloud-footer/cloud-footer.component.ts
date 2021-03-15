/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ProductService } from '@cloud/app/services/product/product.service';
import { HttpResponse, ProductSeller, ProductSummary, SolutionSummary } from '@cloud/models/interfaces';
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
  public sellerInfo: HttpResponse<ProductSeller[]>;
  public sellerLocation: SafeResourceUrl;

  @Input() productId?: string;

  constructor(private productService: ProductService, private solutionsService: SolutionService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.getProductNames();
    this.getSolutionNames();
    if (this.productId) {
      this.getSeller();
    }
  }

  private async getProductNames() {
    if (this.productService.productSummaryData) {
      this.products = this.productService.productSummaryData;
    } else {
      this.products = await this.productService.getProductSummaries();
    }
  }

  private async getSeller() {
    this.sellerInfo = await this.productService.getSellerInfo(this.productId);
    this.sellerLocation = this.sanitizer.bypassSecurityTrustResourceUrl(this.sellerInfo.data[0].map.url);
  }

  private async getSolutionNames() {
    if (this.solutionsService.solutionSummaries) {
      this.solutions = this.solutionsService.solutionSummariesData.data;
    } else {
      this.solutionsData = this.solutionsService.getSolutionSummaries();
      this.solutionsData.subscribe(res => {
        this.solutions = res.data;
      });
    }
  }
}
