import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultComponent } from '@polaris/app/search/result/result.component';

const routes: Routes = [
  {
    path: 'result',
    component: ResultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {
}
