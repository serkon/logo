import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoRoutingModule } from './logo-routing.module';
import { LogoComponent } from './logo.component';

@NgModule({
  declarations: [LogoComponent],
  imports: [CommonModule, LogoRoutingModule],
})
export class LogoModule {
}
