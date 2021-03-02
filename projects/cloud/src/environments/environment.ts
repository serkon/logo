// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    baseURL: 'https://talha.io/api/logoapi',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
