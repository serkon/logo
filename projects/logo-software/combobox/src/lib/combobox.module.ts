import { NgModule } from '@angular/core';
import { ComboboxComponent } from './combobox.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ComboboxComponent],
  imports: [FormsModule, CommonModule],
  exports: [ComboboxComponent],
})
export class ComboboxModule {
}
