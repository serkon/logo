/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgdExampleComponent } from './example.component';
import { NgdExample404Component } from './example-404.component';

export const routes: Routes = [
  {
    path: '',
    component: NgdExampleComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../../projects/playground/src/app/logo/logo.module').then(m => m.LogoModule),
      },
      {
        path: '**',
        component: NgdExample404Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgdExampleRoutingModule {
}
