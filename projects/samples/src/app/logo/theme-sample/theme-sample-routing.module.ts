import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeShowcaseComponent } from '@samples/theme-sample/theme-showcase/theme-showcase.component';


const routes: Routes = [{
  path: 'theme-showcase/theme-showcase.component',
  component: ThemeShowcaseComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeSampleRoutingModule {
}
