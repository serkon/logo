/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsComponent } from './docs.component';
import { GetstartedComponent } from './getstarted/getstarted.component';

const routes: Routes = [
    {
      path: '',
      component: DocsComponent,
      children: [
        {
          path: 'detail',
          loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule),
        },
        {
          path: 'getstarted',
          component: GetstartedComponent,
        },
      ],
    },
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {
}
