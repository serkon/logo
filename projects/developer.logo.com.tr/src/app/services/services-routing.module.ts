import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
    path: 'services',
    component: ServicesComponent,
    children: [
      {path: 'idm', loadChildren: () => import('./idm/idm.module').then(module => module.IdmModule)},
      {path: 'cc', loadChildren: () => import('./cc/cc.module').then(module => module.CcModule)},
      {path: 'ms', loadChildren: () => import('./ms/ms.module').then(module => module.MsModule)},
      {path: 'as', loadChildren: () => import('./as/as.module').then(module => module.AsModule)},
      {path: 'ss', loadChildren: () => import('./ss/ss.module').then(module => module.SsModule)},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {
}
