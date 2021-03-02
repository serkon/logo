import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { SharedService } from '../shared/shared.service';
import { HttpResponse, ProductSummary } from '../../../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient, private helpers: SharedService) {
  }

  public getProductSummaries(): Promise<HttpResponse<ProductSummary>> {
    const data = this.http.post<HttpResponse<ProductSummary>>(
      `${environment.api.baseURL}/${environment.api.product.prefix}/${environment.api.product.summary}`,
      '',
    )
      .toPromise()
      .then((res) => {
        return res;
      });
    return data;
  }
}
