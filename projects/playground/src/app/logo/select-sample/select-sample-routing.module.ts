import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectShowcaseComponent } from './select-showcase/select-showcase.component';

const routes: Routes = [
  {
    path: 'select-showcase/select-showcase.component',
    component: SelectShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectSampleRoutingModule {
}
