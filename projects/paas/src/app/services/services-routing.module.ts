import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
    path: 'services',
    component: ServicesComponent,
    children: [
      {path: 'idm', loadChildren: () => import('./idm/idm.module').then(module => module.IdmModule)},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {
}
