import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawerShowcaseComponent } from './drawer-showcase/drawer-showcase.component';

const routes: Routes = [{
  path: 'drawer-showcase/drawer-showcase.component',
  component: DrawerShowcaseComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrawerSampleRoutingModule {
}
