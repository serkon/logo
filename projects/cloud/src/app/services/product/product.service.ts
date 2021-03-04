import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@cloud/environments/environment';
import { SharedService } from '@cloud/app/services/shared/shared.service';
import { HttpResponse, ProductSummary, Sector, Segment } from '@cloud/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productSummaryData: HttpResponse<ProductSummary[]>;
  public segmentData: HttpResponse<Segment[]>;
  public sectorData: HttpResponse<Sector[]>;

  constructor(private http: HttpClient, private helpers: SharedService) {
  }

  public getProductSummaries(): Promise<HttpResponse<ProductSummary[]>> {
    return this.http.post<HttpResponse<ProductSummary[]>>(
      `${environment.api.baseURL}/${environment.api.product.prefix}/${environment.api.product.summary}`,
      '',
    ).toPromise().then((response) => {
      this.productSummaryData = response;
      return response;
    });
  }

  public getSegments(): Promise<HttpResponse<Segment[]>> {
    return this.http.get<HttpResponse<Segment[]>>(
      `${environment.api.baseURL}/${environment.api.product.prefix}/${environment.api.product.segment}`,
    ).toPromise().then((response) => {
      this.segmentData = response;
      return response;
    });
  }

  public getSectors(): Promise<HttpResponse<Sector[]>> {
    return this.http.get<HttpResponse<Sector[]>>(
      `${environment.api.baseURL}/${environment.api.product.prefix}/${environment.api.product.sector}`,
    ).toPromise().then((response) => {
      this.sectorData = response;
      return response;
    });
  }
}
