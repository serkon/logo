import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpResponse, ProductSummary, Sector, Segment, SolutionSummary } from '@cloud/models/interfaces';
import { SolutionService } from '@cloud/app/services/solutions/solution.service';
import { ProductService } from '@cloud/app/services/product/product.service';

@Component({
  selector: 'logo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public solutionsData: Observable<HttpResponse<SolutionSummary[]>>;
  public segmentData: HttpResponse<Segment[]>;
  public segments: Segment[];
  public sectorData: HttpResponse<Sector[]>;
  public sectors: Sector[];
  public ProductSummaries: ProductSummary[];
  private ProductSummaryData: HttpResponse<ProductSummary[]>;

  constructor(public solutionService: SolutionService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.loadSolutions();
    this.loadSegments();
    this.loadSectors();
    this.loadProductSummaries();
  }

  private loadSolutions() {
    this.solutionsData = this.solutionService.getSolutionSummaries();
    this.solutionsData.subscribe(response => {
      this.solutionService.solutionSummaries = response.data;
    });
  }

  private async loadSegments() {
    this.segmentData = await this.productService.getSegments();
    this.segments = this.segmentData.data;
  }

  private async loadSectors() {
    this.sectorData = await this.productService.getSectors();
    this.sectors = this.sectorData.data;
    console.log(this.sectors);
  }

  private async loadProductSummaries() {
    this.ProductSummaryData = await this.productService.getProductSummaries();
    this.ProductSummaries = this.ProductSummaryData.data;
  }

}
