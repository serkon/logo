import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksModule } from '@logo-software/links';
import { CoreServicesRoutingModule } from './core-services-routing.module';
import { CoreServicesComponent } from './core-services.component';

@NgModule({
  declarations: [CoreServicesComponent],
  imports: [CommonModule, CoreServicesRoutingModule, LinksModule],
  exports: [CoreServicesComponent],
})
export class CoreServicesModule {
}
