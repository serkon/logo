import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaskDirectiveShowcaseComponent } from './mask-directive-showcase/mask-directive-showcase.component';
import { EndpointServiceShowcaseComponent } from '@playground/core-sample/endpoint-service-showcase/endpoint-service-showcase.component';
import { StorageClassShowcaseComponent } from '@playground/core-sample/storage-class-showcase/storage-class-showcase.component';

const routes: Routes = [
  {
    path: 'mask-directive-showcase/mask-directive-showcase.component',
    component: MaskDirectiveShowcaseComponent,
  },
  {
    path: 'endpoint-service-showcase/endpoint-service-showcase.component',
    component: EndpointServiceShowcaseComponent,
  },
  {
    path: 'storage-class-showcase/storage-class-showcase.component',
    component: StorageClassShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreSampleRoutingModule {
}
