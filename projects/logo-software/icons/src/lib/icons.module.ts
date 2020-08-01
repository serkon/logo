import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IconsComponent } from './icons.component';

@NgModule({
  declarations: [IconsComponent],
  imports: [CommonModule, FormsModule],
  exports: [IconsComponent],
})
export class IconsModule {
}
