import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '@logo-software/header';
import { LinksModule } from '@logo-software/links';

import { HeaderSampleRoutingModule } from './header-sample-routing.module';
import { HeaderShowcaseComponent } from './header-showcase/header-showcase.component';

@NgModule({
  declarations: [HeaderShowcaseComponent],
  imports: [CommonModule, HeaderSampleRoutingModule, HeaderModule, LinksModule],
  exports: [HeaderShowcaseComponent],
})
export class HeaderSampleModule {
}
