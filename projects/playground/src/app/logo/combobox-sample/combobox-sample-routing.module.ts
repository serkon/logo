import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComboboxShowcaseComponent } from './combobox-showcase/combobox-showcase.component';

const routes: Routes = [{
  path: 'combobox-showcase/combobox-showcase.component',
  component: ComboboxShowcaseComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComboboxSampleRoutingModule {
}
