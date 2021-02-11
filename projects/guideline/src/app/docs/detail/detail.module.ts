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
import { CommonModule } from '@angular/common';
import { MarkdownModule } from '@logo-software/markdown';
import { PlaygroundModule } from '@logo-software/playground';

import { DetailRoutingModule } from './detail-routing.module';
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

@NgModule({
  declarations: [DetailComponent, SpacingComponent, AccordionComponent, ActionBarComponent, AzIndexComponent, ActivitySheetComponent, AppfaceComponent, BadgeComponent, BreadcrumbComponent, BulletPointComponent, ButtonComponent, ButtonGroupComponent, CalendarComponent, CardComponent, CheckboxComponent, DatepickerComponent, FormComponent],
  imports: [CommonModule, DetailRoutingModule, MarkdownModule, PlaygroundModule],
  exports: [DetailComponent, SpacingComponent, AccordionComponent, ActionBarComponent, AzIndexComponent, ActivitySheetComponent, AppfaceComponent, BadgeComponent, BreadcrumbComponent, BulletPointComponent, ButtonComponent, ButtonGroupComponent, CalendarComponent, CardComponent, CheckboxComponent, DatepickerComponent, FormComponent],
})
export class DetailModule {
}
