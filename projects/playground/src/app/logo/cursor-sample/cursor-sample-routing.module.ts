import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursorShowcaseComponent } from './cursor-showcase/cursor-showcase.component';

const routes: Routes = [{
  path: 'cursor-showcase/cursor-showcase.component',
  component: CursorShowcaseComponent,
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursorSampleRoutingModule {
}
