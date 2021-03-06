import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroModule } from '@logo-software/hero';
import { PopoverModule } from '@logo-software/popover';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HeroModule,
        PopoverModule,
    ],
  exports: [HomeComponent],
})
export class HomeModule {
}
