import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsShowcaseComponent } from './icons-showcase.component';

const routes: Routes = [{
  path: 'icons-showcase/icons-showcase.component',
  component: IconsShowcaseComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconsSampleRoutingModule {
}
