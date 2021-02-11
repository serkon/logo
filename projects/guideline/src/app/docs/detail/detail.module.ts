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
import { TabComponent } from './pages/tab/tab.component';
import { SwitchComponent } from './pages/switch/switch.component';
import { SliderComponent } from './pages/slider/slider.component';
import { RadioButtonComponent } from './pages/radio-button/radio-button.component';
import { SelectComponent } from './pages/select/select.component';
import { PopupComponent } from './pages/popup/popup.component';
import { PopoverComponent } from './pages/popover/popover.component';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { MultiselectComponent } from './pages/multiselect/multiselect.component';
import { InputComponent } from './pages/input/input.component';
import { InfoContainerComponent } from './pages/info-container/info-container.component';

@NgModule({
  declarations: [
    DetailComponent,
    SpacingComponent,
    AccordionComponent,
    ActionBarComponent,
    AzIndexComponent,
    ActivitySheetComponent,
    AppfaceComponent,
    BadgeComponent,
    BreadcrumbComponent,
    BulletPointComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CalendarComponent,
    CardComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormComponent,
    TabComponent,
    SwitchComponent,
    SliderComponent,
    RadioButtonComponent,
    SelectComponent,
    PopupComponent,
    PopoverComponent,
    PaginationComponent,
    MultiselectComponent,
    InputComponent,
    InfoContainerComponent,
  ],
  imports: [CommonModule, DetailRoutingModule, MarkdownModule, PlaygroundModule],
  exports: [DetailComponent],
})
export class DetailModule {
}
