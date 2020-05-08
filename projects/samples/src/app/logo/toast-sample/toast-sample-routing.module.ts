import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastShowcaseComponent } from '@samples/toast-sample/toast-showcase.component';
import { ToastModule } from '@logo-software/toast';


const routes: Routes = [
  {
    path: 'toast-showcase/toast-showcase.component',
    component: ToastShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ToastModule],
  exports: [RouterModule],
})
export class ToastSampleRoutingModule {
}
