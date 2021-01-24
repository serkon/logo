import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownShowcaseComponent } from './markdown-showcase/markdown-showcase.component';

const routes: Routes = [
  {
    path: 'markdown-showcase/markdown-showcase.component',
    component: MarkdownShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkdownSampleRoutingModule {
}
