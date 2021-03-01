import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@logo-software/core';

import { CoreSampleRoutingModule } from './core-sample-routing.module';
import { MaskDirectiveShowcaseComponent } from './mask-directive-showcase/mask-directive-showcase.component';
import { EndpointServiceShowcaseComponent } from './endpoint-service-showcase/endpoint-service-showcase.component';

@NgModule({
  declarations: [
    MaskDirectiveShowcaseComponent,
    EndpointServiceShowcaseComponent,
  ],
  imports: [
    CommonModule,
    CoreSampleRoutingModule,
    CoreModule,
  ],
})
export class CoreSampleModule {
}
