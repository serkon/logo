import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JsComponent } from '@paas/src/app/services/js/js.component';

const routes: Routes = [
  {path: '', component: JsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsRoutingModule {
}
