import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { LinkModule } from '@logo-software/link';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, LinkModule],
  exports: [HeaderComponent],
})
export class HeaderModule {
}
