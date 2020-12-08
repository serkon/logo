import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeSampleRoutingModule } from './theme-sample-routing.module';
import { ThemeShowcaseComponent } from './theme-showcase/theme-showcase.component';

@NgModule({
  imports: [CommonModule, ThemeSampleRoutingModule],
  declarations: [ThemeShowcaseComponent],
  exports: [ThemeShowcaseComponent],
})
export class ThemeSampleModule {
}
