/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../projects/samples/src/app/logo/input-sample/input-sample.module').then(m => m.InputSampleModule),
  },
  {
    path: 'docs',
    loadChildren: () => import('./documentation/documentation.module').then(m => m.NgdDocumentationModule),
  },
  {
    path: 'example',
    loadChildren: () => import('./example/example.module').then(m => m.NgdExampleModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
