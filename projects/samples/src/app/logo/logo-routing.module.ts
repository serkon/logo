import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoComponent } from './logo.component';

const routes: Routes = [
  {
    path: 'logo',
    component: LogoComponent,
    children: [
      {
        path: 'core-sample',
        loadChildren: () => import('./core-sample/core-sample.module').then(m => m.CoreSampleModule),
      },
      {
        path: 'excel-sample',
        loadChildren: () => import('./excel-sample/excel-sample.module').then(m => m.ExcelSampleModule),
      },
      {
        path: 'language-sample',
        loadChildren: () => import('./language-sample/language-sample.module').then(m => m.LanguageSampleModule),
      },
      {
        path: 'table-sample',
        loadChildren: () => import('./table-sample/table-sample.module').then(m => m.TableSampleModule),
      },
      {
        path: 'paging-sample',
        loadChildren: () => import('./paging-sample/paging-sample.module').then(m => m.PagingSampleModule),
      },
      {
        path: 'toast-sample',
        loadChildren: () => import('./toast-sample/toast-sample.module').then(m => m.ToastSampleModule),
      },
      {
        path: 'icons-sample',
        loadChildren: () => import('./icons-sample/icons-sample.module').then(m => m.IconsSampleModule),
      },
      {
        path: 'theme-sample',
        loadChildren: () => import('./theme-sample/theme-sample.module').then(m => m.ThemeSampleModule),
      },
      {
        path: 'input-sample',
        loadChildren: () => import('./input-sample/input-sample.module').then(m => m.InputSampleModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoRoutingModule {
}
