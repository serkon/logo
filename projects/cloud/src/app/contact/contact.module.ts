import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroModule } from '@logo-software/hero';
import { BreadcrumbModule } from '@logo-software/breadcrumb';
import { TabsModule } from '@logo-software/tabs';
import { LinksModule } from '@logo-software/links';
import { AccordionModule } from '@logo-software/accordion';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { CloudFooterModule } from '@cloud/app/components/cloud-footer/cloud-footer.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HeroModule,
    BreadcrumbModule,
    TabsModule,
    LinksModule,
    AccordionModule,
    CloudFooterModule,
  ],
  exports: [ContactComponent],
})
export class ContactModule {
}
