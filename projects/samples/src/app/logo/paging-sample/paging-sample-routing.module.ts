import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageShowcaseComponent } from '@samples/language-sample/language-showcase/language-showcase.component';
import { PagingShowcaseComponent } from '@samples/paging-sample/paging-showcase/paging-showcase.component';


const routes: Routes = [
  {
    path: 'paging-showcase/paging-showcase.component',
    component: PagingShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagingSampleRoutingModule {
}
