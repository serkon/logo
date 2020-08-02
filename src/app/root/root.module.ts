import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { LinksModule } from '@logo-software/link';


@NgModule({
  declarations: [RootComponent],
  imports: [CommonModule, RootRoutingModule, LinksModule],
  exports: [RootComponent],
})
export class RootModule {
}
