import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoComponent } from './logo.component';

const routes: Routes = [
  {
    path: 'logo',
    component: LogoComponent,
    children: [
      {
        path: 'select-sample',
        loadChildren: () => import('./select-sample/select-sample.module').then(m => m.SelectSampleModule),
      },
      {
        path: 'datepicker-sample',
        loadChildren: () => import('./datepicker-sample/datepicker-sample.module').then(m => m.DatepickerSampleModule),
      },
      {
        path: 'input-sample',
        loadChildren: () => import('./input-sample/input-sample.module').then(m => m.InputSampleModule),
      },
      {
        path: 'button-sample',
        loadChildren: () => import('./button-sample/button-sample.module').then(m => m.ButtonSampleModule),
      },
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
        path: 'cursor-sample',
        loadChildren: () => import('./cursor-sample/cursor-sample.module').then(m => m.CursorSampleModule),
      },
      {
        path: 'link-sample',
        loadChildren: () => import('./link-sample/link-sample.module').then(m => m.LinkSampleModule),
      },
      {
        path: 'carousel-sample',
        loadChildren: () => import('./carousel-sample/carousel-sample.module').then(m => m.CarouselSampleModule),
      },
      {
        path: 'combobox-sample',
        loadChildren: () => import('./combobox-sample/combobox-sample.module').then(m => m.ComboboxSampleModule),
      },
      {
        path: 'accordion-sample',
        loadChildren: () => import('./accordion-sample/accordion-sample.module').then(m => m.AccordionSampleModule),
      },
      {
        path: 'drawer-sample',
        loadChildren: () => import('./drawer-sample/drawer-sample.module').then(m => m.DrawerSampleModule),
      },
      {
        path: 'playground-sample',
        loadChildren: () => import('./playground-sample/playground-sample.module').then(m => m.PlaygroundSampleModule),
      },
      {
        path: 'dynamic-sample',
        loadChildren: () => import('./dynamic-sample/dynamic-sample.module').then(m => m.DynamicSampleModule),
      },
      {
        path: 'markdown-sample',
        loadChildren: () => import('./markdown-sample/markdown-sample.module').then(m => m.MarkdownSampleModule),
      },
      {
        path: 'perspective-sample',
        loadChildren: () => import('./perspective-sample/perspective-sample.module').then(m => m.PerspectiveSampleModule),
      },
      {
        path: 'tree-sample',
        loadChildren: () => import('./tree-sample/tree-sample.module').then(m => m.TreeSampleModule),
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
