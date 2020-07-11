import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PerspectiveModule } from '@logo-software/perspective';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PerspectiveModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {
}
