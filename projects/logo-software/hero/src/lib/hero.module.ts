import { NgModule } from '@angular/core';
import { HeroComponent } from './hero.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
  ],
  exports: [HeroComponent],
})
export class HeroModule {
}
