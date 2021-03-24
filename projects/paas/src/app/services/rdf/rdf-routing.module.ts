import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RdfComponent } from '@paas/src/app/services/rdf/rdf.component';

const routes: Routes = [
  {path: '', component: RdfComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdfRoutingModule {
}
