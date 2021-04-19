import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompleteModule } from '@logo-software/autocomplete';

import { AutocompleteSampleRoutingModule } from './autocomplete-sample-routing.module';
import { AutocompleteShowcaseComponent } from './autocomplete-showcase/autocomplete-showcase.component';

@NgModule({
  declarations: [AutocompleteShowcaseComponent],
  imports: [
    CommonModule,
    AutocompleteSampleRoutingModule,
    AutocompleteModule,
  ],
  exports: [AutocompleteShowcaseComponent],
})
export class AutocompleteSampleModule {
}
