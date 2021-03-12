import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from '@logo-software/breadcrumb';
import { HeroModule } from '@logo-software/hero';

import { CloudFooterModule } from '@cloud/app/components/cloud-footer/cloud-footer.module';
import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';

@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    HeroModule,
    BreadcrumbModule,
    CloudFooterModule,
  ],
  exports: [InfoComponent],
})
export class InfoModule {
}
