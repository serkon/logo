import { InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { STORAGE_TYPES, StorageModule } from '@logo-software/storage';

import { IdmComponent } from './idm.component';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export const IDM_CONFIG = new InjectionToken('idm config');
export const IDM_ID = new InjectionToken('idm client id');
export const IDM_DEFAULT_CONFIG = {
  URI: 'http://dev-linux.logo-paas.com:5100',
  TENANT: {
    DEFAULT: '/api/users/{userId}/defaulttenant',
  },
  TOKEN: {
    GET: '/api/Token/GetToken',
    VALIDATE: '/api/Token/ValidateToken',
  },
  DIRECTION: {
    REDIRECT: true,
    RETURN_URI: 'http://localhost:4200',
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
    private activatedRoute: ActivatedRoute) {
    if (parentModule) {
      throw new TypeError(`IdmModule is imported twice.`)
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
    this.activatedRoute.queryParams.subscribe((i) => {
      console.log(i);
    });
  }
}
