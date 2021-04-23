import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@logo-software/carousel';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LinksModule } from '@logo-software/links';
import { FooterModule } from '@developer/src/components/footer/footer.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, CarouselModule, LinksModule, FooterModule, LinksModule, LinksModule],
  exports: [MainComponent],
})
export class MainModule {
}
