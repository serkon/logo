import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { StorageClass } from '@logo-software/storage';

import { IDM_CONFIG, IDM_ID, IDMConfig } from './idm.module';
import { GetToken, Validated } from './interface/token';
import { User } from './interface/user';
import { AuthorizationType } from './interface/authorization-type';
import { LoggerService } from './service/logger.service';
import { PrivilegeService } from './service/privilege.service';
import { RequestMethod } from './service/endpoint.service';

@Injectable({
  providedIn: 'root',
})
export class IdmService {
  public subscription: Subscription;
  public token: string;
  public url: any;
  private _login = false;

  constructor(
    @Inject(IDM_ID) public clientId: string,
    @Inject(IDM_CONFIG) public config: IDMConfig,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) {
  }

  isLogged() {
    return this.validateToken(StorageClass.getItem('token'));
  }

  toLogin() {
    StorageClass.setItem('redirect_uri', this.router.url);
    if (this.config.TOKEN.AUTH_TYPE === AuthorizationType.IMPLICIT) {
      window.location.href = `${this.config.URI}/connect/authorize?client_id=${this.clientId}&scope=vendorExtensions&response_type=token&redirect_uri=${this.config.DIRECTION.RETURN_URI}`;
    } else if (this.config.TOKEN.AUTH_TYPE === AuthorizationType.CODE) {
      window.location.href = `${this.config.URI}/connect/authorize/callback?client_id=${this.clientId}&redirect_uri=${this.config.DIRECTION.RETURN_URI}&response_type=code&scope=offline_access`;
    }
  }

  public getTokenWithCode(code: string) {
    this.http.post(`${this.config.URI}${this.config.TOKEN.GET}`, {
      RedirectUri: `${this.config.URI}`,
      code,
    }).subscribe((response: GetToken) => {
      this.token = response.Value.access_token;
      this.validateToken(this.token);
    });
  }

  validateToken(token = StorageClass.getItem('token')): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this._login) {
        if (token) {
          this.http.request(RequestMethod.GET, `${this.config.URI}/${this.config.TOKEN.VALIDATE}/${token}`).subscribe(
            (response: Validated) => this.loginSuccessHandler(response),
            (error: HttpErrorResponse) => this.loginErrorHandler(reject, error),
            () => this.loginCompleteHandler(resolve),
          );
        } else {
          this.loginErrorHandler(reject);
        }
      }
    });
  }

  public isAccessible(activatedRouteSnapshot: ActivatedRouteSnapshot): boolean {
    const privilegeStatus: boolean = PrivilegeService.check(activatedRouteSnapshot);
    if (!privilegeStatus && this._login) {
      if (this.config.DIRECTION.REDIRECT) {
        this.router.navigate([this.config.DIRECTION['403']]);
      }
      return false;
    }
    return privilegeStatus;
  }

  getUserList(ids: string[]) {
    return this.http.get(
      `${this.config.URI}/${this.config.USER.LIST}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${StorageClass.getItem('token')}`,
          ids,
        }),
      },
    );
  }

  public loginSuccessHandler(validated: Validated) {
    this._login = true;
    StorageClass.setItem('token', validated.RawKey);
    StorageClass.setItem('validated', validated);
    const userId: string = validated.UserId;
    this.getUserList([userId]).subscribe((response: User[]) => {
      StorageClass.setItem('user', response[0]);
    });
  }

  public loginErrorHandler(reject, error?) {
    this.secureLoginClear();
    if (this.config.DIRECTION.LOGIN_PAGE.STATUS) {
      this.router.navigate([this.config.DIRECTION.LOGIN_PAGE.URI]);
    } else {
      this.toLogin();
    }
    reject(error || new Error('restriction service error'));
  }

  public loginCompleteHandler(resolve) {
    LoggerService.info('Auth token complete');
    this.router.navigateByUrl(StorageClass.getItem('redirect_uri'));
    resolve(true);
  }

  secureLoginClear() {
    StorageClass.clear();
    this._login = false;
  }

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
    LoggerService.info(`Logout success: ${response}`);
  }

  onLogoutCompletedHandler() {
    LoggerService.info('Logged out');
  }

}
