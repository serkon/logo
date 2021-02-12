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
import { TableComponent } from './pages/table/table.component';
import { TagComponent } from './pages/tag/tag.component';
import { ToastComponent } from './pages/toast/toast.component';
import { TooltipComponent } from './pages/tooltip/tooltip.component';
import { TreeComponent } from './pages/tree/tree.component';
import { UploadComponent } from './pages/upload/upload.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { ColorComponent } from './pages/color/color.component';
import { GridComponent } from './pages/grid/grid.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { PatternsComponent } from './pages/patterns/patterns.component';

const routes: Routes = [
  {
    path: '',
    component: DetailComponent,
    children: [
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
      {
        path: 'info-container',
        component: InfoContainerComponent,
      },
      {
        path: 'input',
        component: InputComponent,
      },
      {
        path: 'multiselect',
        component: MultiselectComponent,
      },
      {
        path: 'pagination',
        component: PaginationComponent,
      },
      {
        path: 'popover',
        component: PopoverComponent,
      },
      {
        path: 'popup',
        component: PopupComponent,
      },
      {
        path: 'radiobutton',
        component: RadioButtonComponent,
      },
      {
        path: 'select',
        component: SelectComponent,
      },
      {
        path: 'slider',
        component: SliderComponent,
      },
      {
        path: 'spacing',
        component: SpacingComponent,
      },
      {
        path: 'switch',
        component: SwitchComponent,
      },
      {
        path: 'tab',
        component: TabComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'tag',
        component: TagComponent,
      },
      {
        path: 'toast',
        component: ToastComponent,
      },
      {
        path: 'tooltip',
        component: TooltipComponent,
      },
      {
        path: 'tree',
        component: TreeComponent,
      },
      {
        path: 'upload',
        component: UploadComponent,
      },
      {
        path: 'wizard',
        component: WizardComponent,
      },
      {
        path: 'color',
        component: ColorComponent,
      },
      {
        path: 'grid',
        component: GridComponent,
      },
      {
        path: 'typography',
        component: TypographyComponent,
      },
      {
        path: 'patterns',
        component: PatternsComponent,
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
