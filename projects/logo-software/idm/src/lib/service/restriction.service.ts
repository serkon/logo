import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { StorageClass } from '@logo-software/storage';
import { RequestMethod } from './endpoint.service';

import { PrivilegeService } from './privilege.service';
import { LoggerService } from './logger.service';
import { Token } from '../interface/token';
import { IDM_CONFIG, IDM_ID } from '../idm.module';

@Injectable({
  providedIn: 'root',
})
export class RestrictionService implements CanActivate {
  public url: any;
  public token: Token;
  private _login = false;

  constructor(
    @Inject(IDM_ID) public idmClientId: string,
    @Inject(IDM_CONFIG) public idmConfig,
    private router: Router,
    private http: HttpClient,
  ) {
  }

  public async canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot) {
    this.url = routerStateSnapshot.url;
    await this.validateToken();
    if (this._login) {
      return this.isAccessible(activatedRouteSnapshot);
    }
    return false;
  }

  public validateToken(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const token = StorageClass.getItem('token');
      if (!this._login) {
        if (token) {
          this.http.request(RequestMethod.GET, `${this.idmConfig.URI}${this.idmConfig.TOKEN.VALIDATE}`).subscribe(
            (response: HttpResponse<Token>) => this.loginSuccessHandler(response.body),
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
      if (this.idmConfig.DIRECTION.REDIRECT) {
        this.router.navigate([this.idmConfig.DIRECTION['403']]);
      }
      return false;
    }
    return privilegeStatus;
  }

  public loginSuccessHandler(token: Token) {
    this.token = token;
    this._login = true;
    StorageClass.setItem('token', token);
  }

  public loginErrorHandler(reject, error?) {
    this.secureLoginClear();
    if (this.idmConfig.DIRECTION.LOGIN_PAGE.STATUS) {
      this.router.navigate([this.idmConfig.DIRECTION.LOGIN_PAGE.URI]);
    } else {
      window.location.href = `${this.idmConfig.URI}/connect/authorize/callback?client_id=${this.idmClientId}&redirect_uri=${this.idmConfig.DIRECTION.RETURN_URI}&response_type=code&scope=offline_access`;
    }
    reject(error || new Error('restriction service error'));
  }

  public loginCompleteHandler(resolve) {
    LoggerService.info('Auth token complete');
    resolve(true);
  }

  public logout(): void {
    this.secureLoginClear();
    window.location.href = `${this.idmConfig.URI}/account/logout?redirect_uri=${this.url}&appid=${this.idmClientId}&forcesignout=true`;
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
