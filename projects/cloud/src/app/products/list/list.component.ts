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
  public isSectorListExpanded: boolean = false;
  public isFilterExpanded: boolean = false;
  public currentFilters = [];

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
  }

  private async loadProductSummaries() {
    this.ProductSummaryData = await this.productService.getProductSummaries();
    this.ProductSummaries = this.ProductSummaryData.data;
  }

  public toogleSectorList() {
    this.isSectorListExpanded = !this.isSectorListExpanded;
  }

  public toogleFilters() {
    this.isFilterExpanded = !this.isFilterExpanded;
  }

  public setSegmentFilter(filtered, filterName: string) {
    const theSegmentFilter = {filter: 'segment', data: {id: filtered.value, name: filterName}}
    this.currentFilters = this.currentFilters.filter((el) => {
      return el.filter !== 'segment';
    });
    // @TODO DEV: Filtreleme eklemeniz gerekiyor
    console.log('##### Make filter for segment:' + filtered.value.toString() + ' #####');
    this.currentFilters.push(theSegmentFilter);
  }

  public setToCurrentFilters(filterType: string, filterId: string, filterName: string, event: any) {
    if (event.currentTarget.checked) {
      const filterItem = {filter: filterType, data: {id: filterId, name: filterName}};
      // @TODO DEV: Filtreleme eklemeniz gerekiyor
      console.log('##### Make filter for ' + filterType + ' and with ' + filterId + ' #####');
      this.currentFilters.push(filterItem);
    } else {
      this.removeFilter(filterId)
    }
  }

  public removeFilter(filterId: string) {
    this.currentFilters = this.currentFilters.filter((el) => {
      return el.data.id !== filterId;
    });
    console.log('##### Make filter with ' + this.currentFilters.toString() + ' #####');
  }

  public checkCurrentFilters(filterId: string) {
    const filterEnabled = this.currentFilters.filter((el) => {
      return el.data.id === filterId;
    });
    if (filterEnabled.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  public clearAllFilters() {
    this.currentFilters = [];
  }

  private filterProducts(filterQuery: string, filterType: string) {
    const listData = JSON.parse(JSON.stringify(this.productService.productSummaryData.data));
    this.ProductSummaries = listData.filter((data) => {
      switch (filterType) {
        case 'solution':
          return data.solution.id === filterQuery;
          break;
        case 'segment':
          return data.segmentId === filterQuery;
          break;
        case 'sector':
          return data.sectorId === filterQuery;
          break;
        default:
          return this.productService.productSummaryData.data;
      }
    });
    console.log(this.ProductSummaries);
  }
}
