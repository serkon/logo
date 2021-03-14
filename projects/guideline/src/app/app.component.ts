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
      'link': '/docs/getstarted',
      'fragment': 'drawer-main-top',
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
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 22,
          'name': 'Grid',
          'link': '/docs/detail/grid',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 23,
          'name': 'Icons',
          'link': '/icons',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 24,
          'name': 'Spacing',
          'link': '/docs/detail/spacing',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 25,
          'name': 'Typography',
          'link': '/docs/detail/typography',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
      ],
      'role': 'ROLE_MENU_ROOT',
    },
    {
      'id': 3,
      'name': 'Components',
      'role': 'ROLE_MENU_ROOT',
      'children': [
        {
          'id': 311,
          'name': 'Accordion',
          'link': '/docs/detail/accordion',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 312,
          'name': 'Action Bar',
          'link': '/docs/detail/actionbar',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 313,
          'name': 'Activity Sheet',
          'link': '/docs/detail/activitysheet',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 314,
          'name': 'Appface',
          'link': '/docs/detail/appface',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 315,
          'name': 'A-Z Index',
          'link': '/docs/detail/azindex',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 316,
          'name': 'Badge',
          'link': '/docs/detail/badge',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 317,
          'name': 'Breadcrumb',
          'link': '/docs/detail/breadcrumb',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 318,
          'name': 'Bullet Point',
          'link': '/docs/detail/bulletpoint',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 319,
          'name': 'Button',
          'link': '/docs/detail/button',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 320,
          'name': 'Button Group',
          'link': '/docs/detail/buttongroup',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 321,
          'name': 'Calendar',
          'link': '/docs/detail/calendar',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 322,
          'name': 'Card',
          'link': '/docs/detail/card',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 323,
          'name': 'Checkbox',
          'link': '/docs/detail/checkbox',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 324,
          'name': 'Datepicker',
          'link': '/docs/detail/datepicker',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 325,
          'name': 'Form',
          'link': '/docs/detail/form',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 326,
          'name': 'Info Container',
          'link': '/docs/detail/info-container',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 327,
          'name': 'Input',
          'link': '/docs/detail/input',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 328,
          'name': 'Multiselect',
          'link': '/docs/detail/multiselect',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 329,
          'name': 'Pagination',
          'link': '/docs/detail/pagination',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 330,
          'name': 'Popover',
          'link': '/docs/detail/popover',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 331,
          'name': 'Popup (Modal)',
          'link': '/docs/detail/popup',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 332,
          'name': 'Radio Button',
          'link': '/docs/detail/radiobutton',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 333,
          'name': 'Select',
          'link': '/docs/detail/select',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 334,
          'name': 'Slider',
          'link': '/docs/detail/slider',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 335,
          'name': 'Switch',
          'link': '/docs/detail/switch',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 336,
          'name': 'Tab',
          'link': '/docs/detail/tab',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 337,
          'name': 'Table',
          'link': '/docs/detail/table',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 338,
          'name': 'Tag',
          'link': '/docs/detail/tag',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 339,
          'name': 'Toast',
          'link': '/docs/detail/toast',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 340,
          'name': 'Tooltip',
          'link': '/docs/detail/tooltip',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 341,
          'name': 'Tree',
          'link': '/docs/detail/tree',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 342,
          'name': 'Upload',
          'link': '/docs/detail/upload',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
        {
          'id': 343,
          'name': 'Wizard',
          'link': '/docs/detail/wizard',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_CONTROL_TOWER',
        },
      ],
    },
    {
      'id': 4,
      'name': 'Patterns',
      'role': 'ROLE_MENU_ROOT',
      'children': [
        {
          'id': 401,
          'name': 'Browser List',
          'link': '/docs/detail/browser-list',
          'fragment': 'drawer-main-top',
          'role': 'ROLE_MENU_ROOT',
        },
      ],
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
