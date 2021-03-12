import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroModule } from '@logo-software/hero';
import { BreadcrumbModule } from '@logo-software/breadcrumb';

import { BlogRoutingModule } from './blog-routing.module';
import { ListComponent } from './list/list.component';

import { CloudFooterModule } from '@cloud/app/components/cloud-footer/cloud-footer.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CloudFooterModule,
    HeroModule,
    BreadcrumbModule,
  ],
  exports: [ListComponent],
})
export class BlogModule {
}
