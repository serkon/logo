/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@cloud/environments/environment';
import { HttpResponse, SolutionSummary } from '@cloud/models/interfaces';
import { SharedService } from '@cloud/app/services/shared/shared.service';

@Injectable({
  providedIn: 'root',
})
export class SolutionService {
  public solutionSummariesData: HttpResponse<SolutionSummary[]>;
  public solutionSummaries: SolutionSummary[];

  constructor(private http: HttpClient, private helpers: SharedService) {
  }

  public getSolutionSummaries(): Observable<HttpResponse<SolutionSummary[]>> {
    return this.http.get<HttpResponse<SolutionSummary[]>>(
      `${environment.api.baseURL}/${environment.api.solution.prefix}/${environment.api.solution.summary}`,
    ).pipe(
      catchError(this.helpers.handleError<HttpResponse<SolutionSummary[]>>('getSolutionSummaries')),
    );
  }
}
