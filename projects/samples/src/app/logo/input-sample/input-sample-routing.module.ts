import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputShowcaseComponent } from './input-showcase/input-showcase.component';


const routes: Routes = [
  {
    path: 'input-showcase/input-showcase.component',
    component: InputShowcaseComponent,
  },
  {
    path: '',
    component: InputShowcaseComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputSampleRoutingModule {
}
