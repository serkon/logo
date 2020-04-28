import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoRoutingModule } from './logo-routing.module';
import { LogoComponent } from './logo.component';
import { NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [LogoComponent],
  imports: [CommonModule, LogoRoutingModule, NbLayoutModule],
})
export class LogoModule {
}
