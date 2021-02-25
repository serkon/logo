import { InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { STORAGE_TYPES, StorageModule } from '@logo-software/storage';

import { IdmComponent } from './idm.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IdmService } from './idm.service';

export const IDM_CONFIG = new InjectionToken('idm config');
export const IDM_ID = new InjectionToken('idm client id');
export const IDM_DEFAULT_CONFIG = {
  URI: 'http://dev-linux.logo-paas.com:5100',
  USER: {
    LIST: 'api/users/list',
  },
  TENANT: {
    DEFAULT: 'api/users/{userId}/defaulttenant',
  },
  TOKEN: {
    AUTH_TYPE: 'implicit',
    GET: 'api/Token/GetToken',
    VALIDATE: 'api/token/validate',
  },
  DIRECTION: {
    REDIRECT: true,
    RETURN_URI: 'http://localhost:4700',
    LOGIN_PAGE: {
      URI: '/login',
      STATUS: false,
    },
    '403': '/forbidden',
    '500': '/server-error',
  },
};
export type IDMConfig = typeof IDM_DEFAULT_CONFIG;

@NgModule({
  declarations: [IdmComponent],
  imports: [StorageModule.forRoot(STORAGE_TYPES.LOCAL)],
  providers: [],
  exports: [IdmComponent],
})
export class IdmModule {
  public subscription: Subscription;

  constructor(
    @Optional() @SkipSelf() private parentModule: IdmModule,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private idmService: IdmService,
  ) {
    if (parentModule) {
      throw new TypeError(`IdmModule is imported twice.`);
    }
    this.checkCode();
  }

  static forRoot(id: string, config?: IDMConfig): ModuleWithProviders<IdmModule> {
    return {
      ngModule: IdmModule,
      providers: [
        {provide: IDM_ID, useValue: id},
        {provide: IDM_CONFIG, useValue: config || IDM_DEFAULT_CONFIG},
      ],
    };
  }

  checkCode() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.code) {
        this.idmService.getTokenWithCode(params.code);
      }
    });

    this.activatedRoute.fragment.subscribe((fragment: string) => {
      if (fragment) {
        const list: { access_token?: string, token_type?: string, expires_in?: string, scope?: string } = {};
        const items = fragment.split('&');
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
