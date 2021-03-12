import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@cloud/environments/environment';
import {
  HttpResponse,
  Product,
  ProductSeller,
  ProductSticker,
  ProductSummary,
  Reference,
  Sector,
  Segment,
} from '@cloud/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productSummaryData: HttpResponse<ProductSummary[]>;
  public productDetail: HttpResponse<Product[]>;
  public segmentData: HttpResponse<Segment[]>;
  public sectorData: HttpResponse<Sector[]>;

  constructor(private http: HttpClient) {
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

  public getProductDetail(productSlug: string): Promise<HttpResponse<Product[]>> {
    return this.http.get<HttpResponse<Product[]>>('/assets/data/json/product-detail.json').toPromise().then(response => {
      this.productDetail = response;
      return response;
    });
    /*return this.http.post<HttpResponse<Product[]>>(
      `${environment.api.baseURL}/${environment.api.product.prefix}/${environment.api.product.detail}`,
      {slug: productSlug},
    ).toPromise().then((response) => {
      this.productDetail = response;
      console.log(response);
      return response;
    });*/
  }

  public getProductSticker(productId: string): Promise<HttpResponse<ProductSticker[]>> {
    return this.http.get<HttpResponse<ProductSticker[]>>('/assets/data/json/product-sticker.json').toPromise().then(response => {
      return response;
    });
  }

  public getProductReferences(productId: string): Promise<HttpResponse<Reference[]>> {
    return this.http.get<HttpResponse<Reference[]>>('/assets/data/json/product-reference.json').toPromise().then(response => {
      return response;
    });
  }

  public async getSellerInfo(id: string) {
    return this.http.get<HttpResponse<ProductSeller>>('/assets/data/json/product-seller.json').toPromise().then(response => {
      return response;
    });
  }
}
