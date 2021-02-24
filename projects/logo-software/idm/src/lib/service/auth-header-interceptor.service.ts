import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { retry, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { StorageClass } from '@logo-software/storage';

import { ErrorService } from './error.service';
import { LoggerService } from './logger.service';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor(private errorService: ErrorService, private router: Router, private ngZone: NgZone) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const login: { [key: string]: User } = StorageClass.getItem('login');
    const storageToken = login && login.user && login.user.token;
    const requestToken = req.headers.get('token');
    let header = {};
    if (!requestToken) {
      header = {headers: req.headers.set('Authorization', `Bearer ${storageToken}`)};
      // User ID
      // Tenant ID
    }
    const newRequest = req.clone(header);
    // return next.handle(newRequest).pipe(retry(1), catchError(this.handleError));
    return next.handle(newRequest).pipe(retry(0), tap(
      // Log the result or error
      data => LoggerService.log(data),
      error => {
        LoggerService.log(error);
        return this.handleError(error);
      },
    ));
  }

  ngZoneRedirect(error: HttpErrorResponse) {
    setTimeout(() => this.ngZone.run(() => {
        this.errorService.$watch.next(error);
      }),
    );
  }

  private handleError(error: HttpErrorResponse) {
    // this.toastService.error(errorResponse.error.message);
    this.ngZoneRedirect(error);
    return throwError(error);
  }
}

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true},
];
