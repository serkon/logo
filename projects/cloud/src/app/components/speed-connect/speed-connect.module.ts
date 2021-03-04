import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedConnectComponent } from './speed-connect.component';
import { LinksModule } from '@logo-software/links';

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
