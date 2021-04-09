import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardModule } from '@logo-software/wizard';
import { LinksModule } from '@logo-software/links';

import { WizardSampleRoutingModule } from './wizard-sample-routing.module';
import { WizardShowcaseComponent } from './wizard-showcase/wizard-showcase.component';

@NgModule({
  declarations: [WizardShowcaseComponent],
  imports: [CommonModule, WizardSampleRoutingModule, WizardModule, LinksModule],
  exports: [WizardShowcaseComponent],
})
export class WizardSampleModule {
}
