import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { LinksModule } from '@logo-software/links';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, LinksModule],
  exports: [HeaderComponent],
})
export class HeaderModule {
}
