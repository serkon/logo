import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicShowcaseComponent } from './dynamic-showcase/dynamic-showcase.component';

const routes: Routes = [
  {
    path: 'dynamic-showcase/dynamic-showcase.component',
    component: DynamicShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicSampleRoutingModule {
}
