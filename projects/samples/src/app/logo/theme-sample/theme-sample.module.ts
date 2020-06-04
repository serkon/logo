import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeSampleRoutingModule } from './theme-sample-routing.module';
import { ThemeShowcaseComponent } from './theme-showcase/theme-showcase.component';
import { ThemeModule } from '@logo-software/theme';


@NgModule({
  imports: [CommonModule, ThemeSampleRoutingModule, ThemeModule],
  declarations: [ThemeShowcaseComponent],
  exports: [ThemeShowcaseComponent],
})
export class ThemeSampleModule {
}
