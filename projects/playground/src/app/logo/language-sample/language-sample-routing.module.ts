import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageShowcaseComponent } from './language-showcase/language-showcase.component';

const routes: Routes = [
  {
    path: 'language-showcase/language-showcase.component',
    component: LanguageShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguageSampleRoutingModule {
}
