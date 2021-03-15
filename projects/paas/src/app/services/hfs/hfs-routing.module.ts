import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HfsComponent } from '@paas/src/app/services/hfs/hfs.component';

const routes: Routes = [
  {path: '', component: HfsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HfsRoutingModule {
}
