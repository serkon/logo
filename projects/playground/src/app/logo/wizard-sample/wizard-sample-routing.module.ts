import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WizardShowcaseComponent } from './wizard-showcase/wizard-showcase.component';

const routes: Routes = [
  {
    path: 'wizard-showcase/wizard-showcase.component',
    component: WizardShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WizardSampleRoutingModule {
}
