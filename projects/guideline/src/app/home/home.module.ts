import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksModule } from '@logo-software/links';
import { CarouselModule } from '@logo-software/carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LedFooterComponent } from '../components/led-footer/led-footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, LedFooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LinksModule,
    CarouselModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent, LedFooterComponent],
})
export class HomeModule {
}
