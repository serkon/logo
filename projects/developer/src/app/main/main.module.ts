import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';
import { LinksModule } from '@logo-software/links';

import { FooterModule } from '@developer/src/components/footer/footer.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, CarouselModule, LinksModule, FooterModule, LinksModule, LinksModule],
  exports: [MainComponent],
})
export class MainModule {
}
