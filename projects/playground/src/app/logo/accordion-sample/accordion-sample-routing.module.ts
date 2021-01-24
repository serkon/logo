import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionShowcaseComponent } from './accordion-showcase/accordion-showcase.component';

const routes: Routes = [
  {
    path: 'accordion-showcase/accordion-showcase.component',
    component: AccordionShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionSampleRoutingModule {
}
