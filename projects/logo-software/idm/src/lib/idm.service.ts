import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { StorageClass } from '@logo-software/storage';

import { GetToken, ValidatedToken } from './interface/token';
import { User } from './interface/user';
import { IdmConfig } from './interface/config';
import { AuthorizationType } from './interface/authorization-type';
import { PrivilegeService } from './service/privilege.service';
import { IDM_CONFIG, IDM_ID } from './idm.module';

/**
 * Idm Service uses for token operation and user operations for Logo Paas IDM Service.
 */
@Injectable({
  providedIn: 'root',
})
export class IdmService {
  /**
   * Subscription for IDM
   */
  public subscription: Subscription;
  /**
   * Access token
   */
  public token: string;
  /**
   * The current URL.
   */
  public url: any;
  /**
   * Login status of the client to the IDM. If the user logged in values will be true. Default is false.
   */
  public isLogged: boolean = false;

  constructor(
    @Inject(IDM_ID) public clientId: string,
    @Inject(IDM_CONFIG) public config: IdmConfig,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) {
  }

  /**
   * Calls the login screen of the IDM. If the user logged in before, the first access token will be validated then redirect to again current route.
   */
  toLogin() {
    StorageClass.setItem('redirect_uri', this.router.url);
    if (this.config.TOKEN.AUTH_TYPE === AuthorizationType.IMPLICIT) {
      window.location.href = `${this.config.URI}/connect/authorize?client_id=${this.clientId}&scope=vendorExtensions&response_type=token&redirect_uri=${this.config.RETURN_URI}`;
    } else if (this.config.TOKEN.AUTH_TYPE === AuthorizationType.CODE) {
      window.location.href = `${this.config.URI}/connect/authorize/callback?client_id=${this.clientId}&redirect_uri=${this.config.RETURN_URI}&response_type=code&scope=offline_access`;
    }
  }

  /**
   * If authorization type set to the AuthorizationType.CODE and client try to login then IDM service calls this method with `code` value.
   * If the returned `code` value is correct, the client will be logged in.
   * @param code
   */
  public getTokenWithCode(code: string) {
    this.http.post(`${this.config.URI}${this.config.TOKEN.GET}`, {
      RedirectUri: `${this.config.URI}`,
      code,
    }).subscribe((response: GetToken) => {
      this.token = response.Value.access_token;
      this.validateToken(this.token);
    });
  }

  /**
   * It checks validation code. Accepts token value. If not set any parameter, it will look to the localStorage for access token then validate it.
   * @param token
   */
  validateToken(token = StorageClass.getItem('token')): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // if (!this.isLogged) {
        if (token) {
          this.http.request('GET', `${this.config.URI}/${this.config.TOKEN.VALIDATE}/${token}`).subscribe(
            (response: ValidatedToken) => this.loginSuccessHandler(response),
            (error: HttpErrorResponse) => this.loginErrorHandler(reject, error),
            () => this.loginCompleteHandler(resolve),
          );
        } else {
          this.loginErrorHandler(reject);
        }
      // }
    });
  }

  public isAccessible(activatedRouteSnapshot: ActivatedRouteSnapshot): boolean {
    const privilegeStatus: boolean = PrivilegeService.check(activatedRouteSnapshot);
    if (!privilegeStatus && this.isLogged) {
      if (this.config.DIRECTION.REDIRECT) {
        this.router.navigate([this.config.DIRECTION['403']]);
      }
      return false;
    }
    return privilegeStatus;
  }

  /**
   * Gives Users information with given ids
   * @param ids
   */
  getUserList(ids: string[]): Observable<HttpResponse<User[]>> {
    return this.http.get<HttpResponse<User[]>>(
      `${this.config.URI}/${this.config.USER.LIST}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${StorageClass.getItem('token')}`,
          ids,
        }),
      },
    );
  }

  public loginSuccessHandler(validated: ValidatedToken) {
    this.isLogged = true;
    StorageClass.setItem('token', validated.RawKey);
    StorageClass.setItem('validated', validated);
    const userId: string = validated.UserId;
    this.getUserList([userId]).subscribe((response) => {
      StorageClass.setItem('user', response[0]);
    });
  }

  public loginErrorHandler(reject, error?) {
    this.secureLoginClear();
    if (this.config.LOGIN_PAGE.STATUS) {
      this.router.navigate([this.config.LOGIN_PAGE.URI]);
    } else {
      this.toLogin();
    }
    reject(error || new Error('restriction service error'));
  }

  public loginCompleteHandler(resolve) {
    this.router.navigateByUrl(StorageClass.getItem('redirect_uri'));
    resolve(true);
  }

  secureLoginClear() {
    StorageClass.clear();
    this.isLogged = false;
  }

  /**
   * For logout from IDM call this method.
   */
  logout() {
    this.url = window.location.href;
    this.secureLoginClear();
    window.location.href = `${this.config.URI}/account/logout?redirect_uri=${this.url}&appid=${this.clientId}&forcesignout=true`;
    // this.api.request(RequestMethod.POST, rest.user.logout).subscribe(
    //   (response: any) => this.onLogoutSuccessHandler(response),
    //   (error) => this.loginErrorHandler(error),
    //   () => this.onLogoutCompletedHandler(),
    // );
  }

  onLogoutSuccessHandler(response: any) {
    this.secureLoginClear();
  }

  onLogoutCompletedHandler() {
  }

}
