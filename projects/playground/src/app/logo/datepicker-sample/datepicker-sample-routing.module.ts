import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatepickerShowcaseComponent } from './datepicker-showcase/datepicker-showcase.component';

const routes: Routes = [
  {
    path: 'datepicker-showcase/datepicker-showcase.component',
    component: DatepickerShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatepickerSampleRoutingModule {
}
