import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(module => module.HomeModule)},
  {path: '', loadChildren: () => import('./services/services.module').then(module => module.ServicesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled',
    // anchorScrolling: 'enabled',
    scrollOffset: [0, 0],
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
