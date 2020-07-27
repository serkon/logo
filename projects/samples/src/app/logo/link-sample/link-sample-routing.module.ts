import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkShowcaseComponent } from '@samples/link-sample/link-showcase/link-showcase.component';


const routes: Routes = [
  {
    path: 'link-showcase/link-showcase.component',
    component: LinkShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinkSampleRoutingModule {
}
