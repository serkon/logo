import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@logo-software/core';

import { DateComponent } from './date.component';

@NgModule({
  declarations: [DateComponent],
  imports: [CommonModule, FormsModule, CoreModule],
  exports: [DateComponent],
})
export class DateModule {
}
