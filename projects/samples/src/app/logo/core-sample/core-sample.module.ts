import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule, STORAGE_TYPES } from '@logo-software/core';
import { CoreSampleRoutingModule } from './core-sample-routing.module';
import { MaskDirectiveShowcaseComponent } from './mask-directive-showcase/mask-directive-showcase.component';
import { EndpointServiceShowcaseComponent } from './endpoint-service-showcase/endpoint-service-showcase.component';
import { StorageClassShowcaseComponent } from './storage-class-showcase/storage-class-showcase.component';

@NgModule({
  declarations: [
    MaskDirectiveShowcaseComponent,
    EndpointServiceShowcaseComponent,
    StorageClassShowcaseComponent,
  ],
  imports: [
    CommonModule,
    CoreSampleRoutingModule,
    CoreModule.forRoot(STORAGE_TYPES.LOCAL),
  ],
})
export class CoreSampleModule {
}
