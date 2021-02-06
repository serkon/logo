import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { LeftbarService } from '@logo-software/leftbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'PaaS Demo';

  constructor(public http: HttpClient, public leftbarService: LeftbarService) {
  }

  ngOnInit(): void {
  }

  public getSampleUserData() {
    this.http.request('GET', '/assets/data/sample-user.json')
      .pipe(
        retry(2),
        catchError(this.handleError),
      )
      .subscribe(
        data => {
          console.log(data);
          this.leftbarService.userInfo = data;
        },
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Hata Oluştu:', error.error.message);
    } else {
      console.error(`Backend Hata Kodu: ${error.status}, ` + `Hata Mesajı: ${error.error}`);
    }
    return throwError(
      'Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.');
  }
}
