import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimerShowcaseComponent } from './timer-showcase/timer-showcase.component';

const routes: Routes = [{
  path: 'timer-showcase/timer-showcase.component',
  component: TimerShowcaseComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerSampleRoutingModule {
}
