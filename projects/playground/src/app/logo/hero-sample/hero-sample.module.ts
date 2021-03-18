import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroModule } from '@logo-software/hero';

import { HeroSampleRoutingModule } from './hero-sample-routing.module';
import { HeroShowcaseComponent } from './hero-showcase/hero-showcase.component';

@NgModule({
  declarations: [HeroShowcaseComponent],
  imports: [
    CommonModule,
    HeroSampleRoutingModule,
    HeroModule,
  ],
  exports: [HeroShowcaseComponent],
})
export class HeroSampleModule {
}
