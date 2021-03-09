import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksModule } from '@logo-software/links';

import { SpeedConnectComponent } from './speed-connect.component';

@NgModule({
  declarations: [SpeedConnectComponent],
  imports: [
    CommonModule,
    LinksModule,
  ],
  exports: [SpeedConnectComponent],
})
export class SpeedConnectModule {
}
