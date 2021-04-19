import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutocompleteShowcaseComponent } from './autocomplete-showcase/autocomplete-showcase.component';

const routes: Routes = [{
  path: 'autocomplete-showcase/autocomplete-showcase.component',
  component: AutocompleteShowcaseComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutocompleteSampleRoutingModule {
}
