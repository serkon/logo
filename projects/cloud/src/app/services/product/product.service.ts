import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@cloud/environments/environment';
import { SharedService } from '@cloud/app/services/shared/shared.service';
import { HttpResponse, ProductSummary } from '@cloud/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public summaries: ProductSummary[];

  constructor(private http: HttpClient, private helpers: SharedService) {
  }

  public getProductSummaries(): Promise<HttpResponse<ProductSummary[]>> {
    return this.http.post<HttpResponse<ProductSummary[]>>(
      `${environment.api.baseURL}/${environment.api.product.prefix}/${environment.api.product.summary}`,
      '',
    ).toPromise().then((response) => {
      this.summaries = response.data;
      return response;
    });
  }
}
