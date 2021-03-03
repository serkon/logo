import { AuthorizationType } from '@logo-software/idm';

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  versionsUrl: 'versions.json',
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
