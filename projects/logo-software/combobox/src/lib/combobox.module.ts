import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ComboboxComponent } from './combobox.component';

@NgModule({
  declarations: [ComboboxComponent],
  imports: [FormsModule, CommonModule],
  exports: [ComboboxComponent],
})
export class ComboboxModule {
}
