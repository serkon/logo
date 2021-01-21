import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'detail',
      loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule),
    },
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {
}
