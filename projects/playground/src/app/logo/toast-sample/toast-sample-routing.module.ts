import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastShowcaseComponent } from '@playground/toast-sample/toast-showcase/toast-showcase.component';

const routes: Routes = [
  {
    path: 'toast-showcase/toast-showcase.component',
    component: ToastShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastSampleRoutingModule {
}
