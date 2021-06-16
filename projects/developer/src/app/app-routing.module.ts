import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./main/main.module').then(module => module.MainModule)},
  {path: '', loadChildren: () => import('./services/services.module').then(module => module.ServicesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'enabled',
    // anchorScrolling: 'enabled',
    scrollOffset: [0, 0],
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
