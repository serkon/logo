import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { StorageClass } from '@logo-software/storage';
import { RequestMethod } from './endpoint.service';

import { PrivilegeService } from './privilege.service';
import { LoggerService } from './logger.service';
import { GetToken, Token } from '../interface/token';
import { IDM_CONFIG, IDM_ID, IDMConfig } from '../idm.module';
import { AuthorizationType } from '../interface/authorization-type';

@Injectable({
  providedIn: 'root',
})
export class RestrictionService implements CanActivate {
  public url: any;
  public token: string;
  private _login = false;

  constructor(
    @Inject(IDM_ID) public clientId: string,
    @Inject(IDM_CONFIG) public config: IDMConfig,
    private router: Router,
    private http: HttpClient,
  ) {
  }

  public async canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot) {
    this.url = routerStateSnapshot.url;
    const token = StorageClass.getItem('token');
    await this.validateToken(token);
    if (this._login) {
      return true; // this.isAccessible(activatedRouteSnapshot);
    }
    return false;
  }

  public validateToken(token = StorageClass.getItem('token')): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this._login) {
        if (token) {
          this.http.request(RequestMethod.GET, `${this.config.URI}/${this.config.TOKEN.VALIDATE}/${token}`).subscribe(
            (response: Token) => this.loginSuccessHandler(response),
            (error: HttpErrorResponse) => this.loginErrorHandler(reject, error),
            () => this.loginCompleteHandler(resolve),
          );
        } else {
          this.loginErrorHandler(reject);
        }
      }
    });
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

  public loginSuccessHandler(token: Token) {
    this._login = true;
    StorageClass.setItem('token', token.RawKey);
    StorageClass.setItem('validated', token);
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

  toLogin() {
    if (this.config.TOKEN.AUTH_TYPE === AuthorizationType.IMPLICIT) {
      window.location.href = `${this.config.URI}/connect/authorize?client_id=${this.clientId}&scope=vendorExtensions&response_type=token&redirect_uri=${this.config.DIRECTION.RETURN_URI}`;
    } else if (this.config.TOKEN.AUTH_TYPE === AuthorizationType.CODE) {
      window.location.href = `${this.config.URI}/connect/authorize/callback?client_id=${this.clientId}&redirect_uri=${this.config.DIRECTION.RETURN_URI}&response_type=code&scope=offline_access`;
    }
  }

  public loginCompleteHandler(resolve) {
    LoggerService.info('Auth token complete');
    resolve(true);
  }

  public logout(): void {
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

  secureLoginClear() {
    StorageClass.clear();
    this._login = false;
  }
}
