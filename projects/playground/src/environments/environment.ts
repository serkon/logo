// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthorizationType } from '@logo-software/idm';

export const environment = {
  production: false,
  IDM: {
    CLIENT_ID: 'b7d27891-7efa-4133-91f0-38ff5b22ac7f',
    CONFIG: {
      URI: 'http://dev-linux.logo-paas.com:5100',
      TENANT: {
        DEFAULT: '/api/users/{userId}/defaulttenant',
      },
      TOKEN: {
        AUTH_TYPE: AuthorizationType.IMPLICIT,
        GET: '/api/Token/GetToken',
        VALIDATE: '/api/Token/ValidateToken',
      },
      DIRECTION: {
        REDIRECT: true,
        '403': '/forbidden',
        '500': '/server-error',
      },
      RETURN_URI: 'http://design.logo.com.tr',
      LOGIN_PAGE: {
        URI: '/login',
        STATUS: false,
      },
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
