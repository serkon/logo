import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SharedService } from '../shared/shared.service';
import { environment } from '../../../environments/environment';
import { BlogSummary, HttpResponse } from '../../../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  constructor(private http: HttpClient, private helpers: SharedService) {
  }

  public getBlogSummary(): Promise<HttpResponse<BlogSummary>> {
    const data = this.http.post<HttpResponse<BlogSummary>>(
      `${environment.api.baseURL}/${environment.api.blog.prefix}/${environment.api.blog.summary}`,
      '',
    )
      .toPromise()
      .then((res) => {
        return res;
      });
    return data;
  }
}
