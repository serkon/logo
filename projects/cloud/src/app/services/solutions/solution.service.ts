import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { HttpResponse, SolutionSummary } from '../../../models/interfaces';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root',
})
export class SolutionService {

  constructor(private http: HttpClient, private helpers: SharedService) {
  }

  public getSolutionSummaries(): Observable<HttpResponse<SolutionSummary>> {
    return this.http.get<HttpResponse<SolutionSummary>>(
      `${environment.api.baseURL}/${environment.api.solution.prefix}/${environment.api.solution.summary}`,
    )
      .pipe(
        catchError(this.helpers.handleError<HttpResponse<SolutionSummary>>('getSolutionSummaries')),
      );
  }
}
