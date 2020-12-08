import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComboboxSampleRoutingModule } from './combobox-sample-routing.module';
import { ComboboxShowcaseComponent } from './combobox-showcase/combobox-showcase.component';
import { ComboboxModule } from '@logo-software/combobox';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ComboboxShowcaseComponent],
  imports: [
    CommonModule,
    ComboboxSampleRoutingModule,
    ComboboxModule,
    FormsModule,
  ],
  exports: [ComboboxShowcaseComponent],
})
export class ComboboxSampleModule {
}
