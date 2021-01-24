import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundShowcaseComponent } from './playground-showcase/playground-showcase.component';

const routes: Routes = [
  {
    path: 'playground-showcase/playground-showcase.component',
    component: PlaygroundShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundSampleRoutingModule {
}
