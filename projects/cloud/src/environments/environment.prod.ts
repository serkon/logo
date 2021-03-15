import { AuthorizationType } from '@logo-software/idm';

export const environment = {
  production: true,
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
      RETURN_URI: 'http://localhost:4700',
      LOGIN_PAGE: {
        URI: '/login',
        STATUS: false,
      },
    },
  },
  api: {
    baseURL: 'http://mocks.paas.test/api',
    solution: {
      prefix: 'solution',
      summary: 'summary/list',
      detail: 'detail',
    },
    product: {
      prefix: 'product',
      summary: 'summary/list',
      detail: 'detail',
      segment: 'segment/list',
      sector: 'sector/list',
      reference: 'reference/list',
      sticker: 'sticker/detail',
      seller: 'seller/detail',
      finder: {
        step: 'step/list',
        questions: 'questions/list',
        expectations: 'expectation/list',
      },
    },
    blog: {
      prefix: 'blog',
      summary: 'summary/list',
      detail: 'detail',
    },
    tag: 'tag/list',
    faq: 'faq/list',
    testimonial: 'testimonial/list',
  },
};
