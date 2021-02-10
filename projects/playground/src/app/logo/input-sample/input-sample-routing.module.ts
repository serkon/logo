import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonShowcaseComponent } from '../button-sample/button-showcase/button-showcase.component';
import { InputShowcaseComponent } from './input-showcase/input-showcase.component';

const routes: Routes = [{
    path: 'input-showcase/input-showcase.component',
    component: InputShowcaseComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputSampleRoutingModule { }
