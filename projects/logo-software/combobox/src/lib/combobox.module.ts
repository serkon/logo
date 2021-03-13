import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@logo-software/core';

import { ComboboxComponent } from './combobox.component';

@NgModule({
  declarations: [ComboboxComponent],
  imports: [FormsModule, CommonModule, CoreModule],
  exports: [ComboboxComponent],
})
export class ComboboxModule {
}
