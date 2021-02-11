/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail.component';
import { SpacingComponent } from './pages/spacing/spacing.component';
import { AccordionComponent } from './pages/accordion/accordion.component';
import { ActionBarComponent } from './pages/actionbar/actionbar.component';
import { AzIndexComponent } from './pages/azindex/azindex.component';
import { ActivitySheetComponent } from './pages/activitysheet/activitysheet.component';
import { AppfaceComponent } from './pages/appface/appface.component';
import { BadgeComponent } from './pages/badge/badge.component';
import { BreadcrumbComponent } from './pages/breadcrumb/breadcrumb.component';
import { BulletPointComponent } from './pages/bulletpoint/bulletpoint.component';
import { ButtonComponent } from './pages/button/button.component';
import { ButtonGroupComponent } from './pages/button-group/button-group.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CardComponent } from './pages/card/card.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: DetailComponent,
    children: [
      {
        path: 'spacing',
        component: SpacingComponent,
      },
      {
        path: 'accordion',
        component: AccordionComponent,
      },
      {
        path: 'actionbar',
        component: ActionBarComponent,
      },
      {
        path: 'activitysheet',
        component: ActivitySheetComponent,
      },
      {
        path: 'appface',
        component: AppfaceComponent,
      },
      {
        path: 'azindex',
        component: AzIndexComponent,
      },
      {
        path: 'badge',
        component: BadgeComponent,
      },
      {
        path: 'breadcrumb',
        component: BreadcrumbComponent,
      },
      {
        path: 'bulletpoint',
        component: BulletPointComponent,
      },
      {
        path: 'button',
        component: ButtonComponent,
      },
      {
        path: 'buttongroup',
        component: ButtonGroupComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'card',
        component: CardComponent,
      },
      {
        path: 'checkbox',
        component: CheckboxComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
      },
      {
        path: 'form',
        component: FormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRoutingModule {
}
