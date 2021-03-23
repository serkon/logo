import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgressBarShowcaseComponent } from './progress-bar-showcase/progress-bar-showcase.component';

const routes: Routes = [{
  path: 'progress-bar-showcase/progress-bar-showcase.component',
  component: ProgressBarShowcaseComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressBarSampleRoutingModule {
}
