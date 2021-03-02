import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () => import('../../../../projects/playground/src/app/logo/logo.module').then(m => m.LogoModule),
  },
  {
    path: 'serkon/:id/patates',
    loadChildren: () => import('../../../../projects/playground/src/app/logo/button-sample/button-sample.module').then(m => m.ButtonSampleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
