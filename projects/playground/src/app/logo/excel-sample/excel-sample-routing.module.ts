import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelShowcaseComponent } from './excel-showcase/excel-showcase.component';

const routes: Routes = [
  {
    path: 'excel-showcase/excel-showcase.component',
    component: ExcelShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcelSampleRoutingModule {
}
