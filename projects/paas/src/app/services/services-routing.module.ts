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
      {path: 'mrs', loadChildren: () => import('./mrs/mrs.module').then(module => module.MrsModule)},
      {path: 'as', loadChildren: () => import('./as/as.module').then(module => module.AsModule)},
      {path: 'ss', loadChildren: () => import('./ss/ss.module').then(module => module.SsModule)},
      {path: 'js', loadChildren: () => import('./js/js.module').then(module => module.JsModule)},
      /*
      LS REMOVED
      {path: 'ls', loadChildren: () => import('./ls/ls.module').then(module => module.LsModule)},
       */
      {path: 'vvs', loadChildren: () => import('./vvs/vvs.module').then(module => module.VvsModule)},
      {path: 'hfs', loadChildren: () => import('./hfs/hfs.module').then(module => module.HfsModule)},
      {path: 'ems', loadChildren: () => import('./ems/ems.module').then(module => module.EmsModule)},
      {path: 'ys', loadChildren: () => import('./ys/ys.module').then(module => module.YsModule)},
      {path: 'rs', loadChildren: () => import('./rs/rs.module').then(module => module.RsModule)},
      {path: 'ds', loadChildren: () => import('./ds/ds.module').then(module => module.DsModule)},
      {path: 'dfs', loadChildren: () => import('./dfs/dfs.module').then(module => module.DfsModule)},
      {path: 'rdf', loadChildren: () => import('./rdf/rdf.module').then(module => module.RdfModule)},
      {path: 'dafs', loadChildren: () => import('./dafs/dafs.module').then(module => module.DafsModule)},
      {path: 'rcfs', loadChildren: () => import('./rcfs/rcfs.module').then(module => module.RcfsModule)},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {
}
