import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimepickerShowcaseComponent } from './timepicker-showcase/timepicker-showcase.component';

const routes: Routes = [{
  path: 'timepicker-showcase/timepicker-showcase.component',
  component: TimepickerShowcaseComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimepickerSampleRoutingModule {
}
