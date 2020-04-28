import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaskDirectiveShowcaseComponent } from './mask-directive-showcase/mask-directive-showcase.component';

const routes: Routes = [
  {
    path: 'mask-directive-showcase/mask-directive-showcase.component',
    component: MaskDirectiveShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreSampleRoutingModule {
}
