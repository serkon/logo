import { AfterContentChecked, ChangeDetectorRef, Compiler, Component } from '@angular/core';

import { DrawerService } from '@logo-software/drawer';
import { Tree } from '@logo-software/tree';
import { HeaderTheme } from '@logo-software/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked {

  public headerTheme = HeaderTheme;
  public items: Tree[] = [
    {
      'id': 1,
      'name': 'Overview',
      'link': '/docs/detail/getstarted',
      'role': 'ROLE_MENU_ROOT',
    },
    {
      'id': 2,
      'name': 'Guideline',
      'children': [
        {
          'id': 21,
          'name': 'Color',
          'link': '/docs/detail/color',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 22,
          'name': 'Grid',
          'link': '/docs/detail/grid',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 23,
          'name': 'Icons',
          'link': '/icons',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 24,
          'name': 'Spacing',
          'link': '/docs/detail/spacing',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 25,
          'name': 'Typography',
          'link': '/docs/detail/typography',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
      ],
      'role': 'ROLE_MENU_ROOT',
    },
    {
      'id': 3,
      'name': 'Components',
      'children': [
        {
          'id': 311,
          'name': 'Accordion',
          'link': '/docs/detail/accordion',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 312,
          'name': 'Action Bar',
          'link': '/docs/detail/actionbar',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 313,
          'name': 'Activity Sheet',
          'link': '/docs/detail/activitysheet',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 314,
          'name': 'Appface',
          'link': '/docs/detail/appface',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 315,
          'name': 'A-Z Index',
          'link': '/docs/detail/azindex',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 316,
          'name': 'Badge',
          'link': '/docs/detail/badge',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 317,
          'name': 'Breadcrumb',
          'link': '/docs/detail/breadcrumb',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 318,
          'name': 'Bullet Point',
          'link': '/docs/detail/bulletpoint',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 319,
          'name': 'Button',
          'link': '/docs/detail/button',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 320,
          'name': 'Button Group',
          'link': '/docs/detail/buttongroup',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 321,
          'name': 'Calendar',
          'link': '/docs/detail/calendar',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 322,
          'name': 'Card',
          'link': '/docs/detail/card',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 323,
          'name': 'Checkbox',
          'link': '/docs/detail/checkbox',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 324,
          'name': 'Datepicker',
          'link': '/docs/detail/datepicker',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 325,
          'name': 'Form',
          'link': '/docs/detail/form',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 326,
          'name': 'Info Container',
          'link': '/docs/detail/info-container',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 327,
          'name': 'Input',
          'link': '/docs/detail/input',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 328,
          'name': 'Multiselect',
          'link': '/docs/detail/multiselect',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 329,
          'name': 'Pagination',
          'link': '/docs/detail/pagination',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 330,
          'name': 'Popover',
          'link': '/docs/detail/popover',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 331,
          'name': 'Popup (Modal)',
          'link': '/docs/detail/popup',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 332,
          'name': 'Radio Button',
          'link': '/docs/detail/radiobutton',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 333,
          'name': 'Select',
          'link': '/docs/detail/select',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 334,
          'name': 'Slider',
          'link': '/docs/detail/slider',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 335,
          'name': 'Switch',
          'link': '/docs/detail/switch',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 336,
          'name': 'Tab',
          'link': '/docs/detail/tab',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 337,
          'name': 'Table',
          'link': '/docs/detail/table',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 338,
          'name': 'Tag',
          'link': '/docs/detail/tag',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 339,
          'name': 'Toast',
          'link': '/docs/detail/toast',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 340,
          'name': 'Tooltip',
          'link': '/docs/detail/tooltip',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 341,
          'name': 'Tree',
          'link': '/docs/detail/tree',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 342,
          'name': 'Upload',
          'link': '/docs/detail/upload',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 343,
          'name': 'Wizard',
          'link': '/docs/detail/wizard',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
      ],
      'role': 'ROLE_MENU_ROOT',
    },
    {
      'id': 4,
      'name': 'Patterns',
      'link': '/docs/detail/patterns',
      'role': 'ROLE_MENU_ROOT',
    },
  ];

  constructor(public drawerService: DrawerService, private compiler: Compiler, private cdr: ChangeDetectorRef) {
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }

  close() {
    this.drawerService.menu = !this.drawerService.menu;
  }

}
