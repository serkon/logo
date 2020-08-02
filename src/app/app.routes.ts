/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./root/root.module').then(m => m.RootModule),
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
