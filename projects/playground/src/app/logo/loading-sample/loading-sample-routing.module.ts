import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoadingShowcaseComponent } from './loading-showcase/loading-showcase.component';

const routes: Routes = [{
  path: 'loading-showcase/loading-showcase.component',
  component: LoadingShowcaseComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingSampleRoutingModule {
}
