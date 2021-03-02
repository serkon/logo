import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@cloud/environments/environment';
import { SharedService } from '@cloud/app/services/shared/shared.service';
import { FAQ, HttpResponse } from '@cloud/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FaqService {

  constructor(private http: HttpClient, private helpers: SharedService) {
  }

  public getFaqs(): Promise<HttpResponse<FAQ>> {
    const data = this.http.post<HttpResponse<FAQ>>(
      `${environment.api.baseURL}/${environment.api.faq}`,
      {filter: {solutionId: '2', productId: '2'}},
    )
      .toPromise()
      .then((res) => {
        return res;
      });
    return data;
  }
}
