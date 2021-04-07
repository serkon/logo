import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DateShowcaseComponent } from './date-showcase/date-showcase.component';

const routes: Routes = [
  {
    path: 'date-showcase/date-showcase.component',
    component: DateShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateSampleRoutingModule {
}
