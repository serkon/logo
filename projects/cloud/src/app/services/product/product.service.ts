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
      null,
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
    return this.http.post<HttpResponse<Product[]>>(
      `${environment.api.baseURL}/${environment.api.product.prefix}/${environment.api.product.detail}`,
      {filter: {slug: productSlug}},
    ).toPromise().then((response) => {
      this.productDetail = response;
      return response;
    });
  }

  public getProductSticker(query: string): Promise<HttpResponse<ProductSticker[]>> {
    return this.http.post<HttpResponse<ProductSticker[]>>(
      `${environment.api.baseURL}/${environment.api.product.prefix}/${environment.api.product.sticker}`,
      {filter: {productId: query}},
    ).toPromise().then((response) => {
      return response;
    });
  }

  public getProductReferences(query: string): Promise<HttpResponse<Reference[]>> {
    return this.http.post<HttpResponse<Reference[]>>(
      `${environment.api.baseURL}/${environment.api.product.prefix}/${environment.api.product.reference}`,
      {filter: {productId: query}},
    ).toPromise().then((response) => {
      return response;
    });
  }

  public async getSellerInfo(query: string): Promise<HttpResponse<ProductSeller[]>> {
    return this.http.post<HttpResponse<ProductSeller[]>>(
      `${environment.api.baseURL}/${environment.api.product.prefix}/${environment.api.product.seller}`,
      {filter: {productId: query}},
    ).toPromise().then((response) => {
      return response;
    });
  }
}
