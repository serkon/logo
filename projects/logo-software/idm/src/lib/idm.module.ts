import { InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, Router } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { STORAGE_TYPES, StorageModule } from '@logo-software/storage';

import { IdmService } from './idm.service';
import { AuthorizationType } from './interface/authorization-type';
import { IdmConfig } from './interface/config';
import { AuthHeaderInterceptor } from './service/auth-header-interceptor.service';

export const IDM_CONFIG = new InjectionToken('idm config');
export const IDM_ID = new InjectionToken('idm client id');
export const IDM_TEMP = new InjectionToken('idm temp config');

export const IDM_DEFAULT_CONFIG: IdmConfig = {
  URI: 'http://dev-linux.logo-paas.com:5100',
  USER: {
    LIST: 'api/users/list',
  },
  TENANT: {
    DEFAULT: 'api/users/{userId}/defaulttenant',
  },
  TOKEN: {
    AUTH_TYPE: AuthorizationType.IMPLICIT,
    GET: 'api/Token/GetToken',
    VALIDATE: 'api/token/validate',
  },
  DIRECTION: {
    REDIRECT: true,
    '403': '/forbidden',
    '500': '/server-error',
  },
  RETURN_URI: 'http://localhost:4700',
  LOGIN_PAGE: {
    STATUS: false,
    URI: '/login',
  },
};

/**
 * Merge default config with the app specific given configuration
 */
export class SetIdmConfig {
  constructor(config?) {
    return this.merge(IDM_DEFAULT_CONFIG, config);
  }

  merge(current, updates, deep: boolean = false) {
    for (const key of Object.keys(updates)) {
      if (!current.hasOwnProperty(key) || typeof updates[key] !== 'object') {
        current[key] = updates[key];
      } else if (deep && current[key] instanceof Array && updates[key] instanceof Array) {
        current[key] = current[key].concat(updates[key]);
      } else {
        this.merge(current[key], updates[key]);
      }
    }
    return current;
  }
}

/**
 * Get authorization token or auth code directly to sign on Logo Identity Management service with oAuth.
 *
 * IDM service offers single sign-on (SSO - Single Sign On) support between platform services and applications with a common user pool structure. In the user log out process, you can log out the user either from the relevant application or from all PaaS applications.
 *
 * @stacked-example(Idm Showcase, logo/idm-sample/idm-showcase/idm-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install IDM Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/idm -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * <sub>app.module.ts</sub>
 *
 * ```typescript
 * // CLIENT_ID (guid) is your PaaS integrated application id - For example: '1a6a024b-05d7-48ea-83db-4be88e29d300'
 * // RETURN_URI (string) is your logged in callback URL address - For example: 'http://design.logo.com.tr'
 *
 * @NgModule({
 *   imports: [IdmModule.forRoot(CLIENT_ID, {RETURN_URI})],
 * })
 * export class AppModule {
 * }
 * ```
 *
 * __NOTE: This module holds client token, user, validated etc. information on localStorage__
 *
 * To access Token, User, Validated information just run below in your code:
 *
 * ```typescript
 * StorageClass.get('user'); // if exist return User
 * StorageClass.get('token'); // return access token string
 * StorageClass.get('validate'); // if exist return ValidatedToken information
 * ```
 */
@NgModule({
  declarations: [],
  imports: [StorageModule.forRoot(STORAGE_TYPES.LOCAL)],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true},
  ],
  exports: [],
})
export class IdmModule {

  constructor(
    @Optional() @SkipSelf() private parentModule: IdmModule,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private idmService: IdmService,
  ) {
    if (parentModule) {
      throw new TypeError(`IdmModule is imported twice.`);
    }
    this.idmService.validateToken();
    this.checkCode();
  }

  static forRoot(id: string, config?: IdmConfig): ModuleWithProviders<IdmModule> {
    return {
      ngModule: IdmModule,
      providers: [
        {provide: IDM_ID, useValue: id},
        {provide: IDM_TEMP, useValue: config},
        {provide: IDM_CONFIG, useClass: SetIdmConfig, deps: [IDM_TEMP]},
      ],
    };
  }

  checkCode() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.code) {
        this.idmService.getTokenWithCode(params.code);
      }
    });

    this.router.events.subscribe(s => {
      if (s instanceof NavigationCancel || s instanceof NavigationEnd) {
        const params = new URLSearchParams(s.url.split('#')[1]);
        const access_token = params.get('access_token');
        if (access_token) {
          this.idmService.validateToken(access_token);
        }
      }
    });

    this.activatedRoute.fragment.subscribe((fragment: string) => {
      const location = window.location.hash.substr(1);
      const hash = fragment || location;
      if (hash) {
        const list: { access_token?: string, token_type?: string, expires_in?: string, scope?: string } = {};
        const items = hash.split('&');
        items.forEach(item => {
          const prop = item.split('=');
          list[prop[0]] = prop[1];
        });
        if (list.access_token) {
          this.idmService.validateToken(list.access_token);
        }
      }
    });
  }
}
