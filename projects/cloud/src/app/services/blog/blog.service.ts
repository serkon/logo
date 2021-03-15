import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SharedService } from '@cloud/app/services/shared/shared.service';
import { environment } from '@cloud/environments/environment';
import { Blog, BlogSummary, HttpResponse } from '@cloud/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  constructor(private http: HttpClient, private helpers: SharedService) {
  }

  public getBlogSummary(): Promise<HttpResponse<BlogSummary[]>> {
    return this.http.post<HttpResponse<BlogSummary[]>>(
      `${environment.api.baseURL}/${environment.api.blog.prefix}/${environment.api.blog.summary}`,
      '',
    )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  public getBlogDetail(query: string): Promise<HttpResponse<Blog[]>> {
    return this.http.post<HttpResponse<Blog[]>>(
      `${environment.api.baseURL}/${environment.api.blog.prefix}/${environment.api.blog.detail}`,
      {filter: {slug: query}},
    ).toPromise().then((res) => {
      return res;
    });
  }
}
