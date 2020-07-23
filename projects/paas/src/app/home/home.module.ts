import { AfterViewInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PerspectiveModule } from '@logo-software/perspective';
import { CarouselModule } from '@logo-software/carousel/src/lib/carousel.module';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PerspectiveModule,
    CarouselModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule implements AfterViewInit {
  ngAfterViewInit() {
    console.log('Home');
  }
}
