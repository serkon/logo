export const structure = [
  {
    type: 'section',
    name: 'Getting Started',
    children: [
      {
        type: 'page',
        name: 'Logo Design System',
        children: [
          {
            type: 'block',
            block: 'markdown',
            source: 'logo/logo-design-system.md',
          },
        ],
      },
      {
        type: 'page',
        name: 'Installation',
        children: [
          {
            type: 'block',
            block: 'markdown',
            source: 'logo/install-modules.md',
          },
        ],
      },
      {
        type: 'page',
        name: 'Development',
        children: [
          {
            type: 'block',
            block: 'markdown',
            source: 'logo/development.md',
          },
        ],
      },
      {
        type: 'page',
        name: 'Documentation',
        children: [
          {
            type: 'block',
            block: 'markdown',
            source: 'logo/documentation.md',
          },
        ],
      },
      {
        type: 'page',
        name: 'Contributing',
        children: [
          {
            type: 'block',
            block: 'markdown',
            source: 'logo/contributing.md',
          },
        ],
      },
      {
        type: 'page',
        name: 'Utils',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'Util',
          },
        ],
      },
    ],
  },
  {
    type: 'section',
    name: 'Components',
    children: [
      /*
{
  type: 'tabs',
  name: 'Paging Module',
  icon: 'layout.svg',
  source: [
    'PagingModule',
    'PagingComponent',
    'Paging',
  ],
},
 */
      {
        type: 'page',
        name: 'Components Overview',
        children: [
          {
            type: 'block',
            block: 'components-overview',
          },
        ],
      },
      {
        type: 'page',
        name: 'Excel Module',
        icon: 'layout.svg',
        children: [
          // {
          //   type: 'block',
          //   block: 'markdown',
          //   source: 'logo/modules/excel-module.md',
          // },
          {
            type: 'block',
            block: 'component',
            source: 'ExcelModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'ExcelComponent',
          },
          {
            type: 'block',
            block: 'component',
            source: 'ExcelSettingType',
          },
          {
            type: 'block',
            block: 'component',
            source: 'ExcelTableColumn',
          },
          {
            type: 'block',
            block: 'component',
            source: 'RequestOptions',
          },
        ],
      },
      {
        type: 'page',
        name: 'Language Module',
        icon: 'tab.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'LanguageModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'LanguageService',
          },
          {
            type: 'block',
            block: 'component',
            source: 'LanguagePipe',
          },
          {
            type: 'block',
            block: 'component',
            source: 'LanguageInitSetting',
          },
          {
            type: 'block',
            block: 'component',
            source: 'Language',
          },
        ],
      },
      {
        type: 'page',
        name: 'Paging Module',
        icon: 'actions.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'PagingModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'PagingComponent',
          },
          {
            type: 'block',
            block: 'component',
            source: 'Pager',
          },
        ],
      },
      {
        type: 'page',
        name: 'Table Module',
        icon: 'list.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'TableModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'TableComponent',
          },
          {
            type: 'block',
            block: 'component',
            source: 'TableColumn',
          },
          {
            type: 'block',
            block: 'component',
            source: 'TableHead',
          },
          {
            type: 'block',
            block: 'component',
            source: 'TableAction',
          },
          {
            type: 'block',
            block: 'component',
            source: 'TableMeta',
          },
          {
            type: 'block',
            block: 'component',
            source: 'FilterType',
          },
          {
            type: 'block',
            block: 'component',
            source: 'TableSorting',
          },
          {
            type: 'block',
            block: 'component',
            source: 'TableUpdateDataType',
          },
        ],
      },
      {
        type: 'page',
        name: 'Core Module',
        icon: 'collapsable.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'CoreModule',
          },
        ],
      },
      {
        type: 'page',
        name: 'Toast Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'ToastModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'ToastComponent',
          },
          {
            type: 'block',
            block: 'component',
            source: 'ToastService',
          },
          {
            type: 'block',
            block: 'component',
            source: 'Toast',
          },
          {
            type: 'block',
            block: 'component',
            source: 'ToastMessageTypes',
          },
          {
            type: 'block',
            block: 'component',
            source: 'ToastAction',
          },
        ],
      },
      {
        type: 'page',
        name: 'Links Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'LinksModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'LinksComponent',
          },
          {
            type: 'block',
            block: 'component',
            source: 'LinkComponent',
          },
          {
            type: 'block',
            block: 'component',
            source: 'Link',
          },
        ],
      },
      {
        type: 'page',
        name: 'Carousel Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'CarouselModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'CarouselComponent',
          },
        ],
      },
      {
        type: 'page',
        name: 'Cursor Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'CursorModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'CursorComponent',
          },
        ],
      },
      {
        type: 'page',
        name: 'Icons Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'markdown',
            source: 'logo/modules/icons-module.md',
          },
          // {
          //   type: 'block',
          //   block: 'component',
          //   source: 'IconsModule',
          // },
          {
            type: 'block',
            block: 'component',
            source: 'IconsComponent',
          },
        ],
      },
      {
        type: 'page',
        name: 'Theme Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'ThemeModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'ThemeComponent',
          },
        ],
      },
      {
        type: 'page',
        name: 'Tree Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'TreeModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'TreeComponent',
          },
          {
            type: 'block',
            block: 'component',
            source: 'Tree',
          },
        ],
      },
      {
        type: 'page',
        name: 'Drawer Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'DrawerModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'DrawerComponent',
          },
          {
            type: 'block',
            block: 'component',
            source: 'DrawerService',
          },
        ],
      },
      {
        type: 'page',
        name: 'Storage Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'StorageModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'StorageService',
          },
        ],
      },
      {
        type: 'page',
        name: 'Tabs Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'TabsModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'TabsComponent',
          },
          {
            type: 'block',
            block: 'component',
            source: 'TabComponent',
          },
        ],
      },
      {
        type: 'page',
        name: 'IDM Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'IdmModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'IdmService',
          },
          {
            type: 'block',
            block: 'component',
            source: 'AuthorizationType',
          },
          {
            type: 'block',
            block: 'component',
            source: 'IdmConfig',
          },
          {
            type: 'block',
            block: 'component',
            source: 'Tenant',
          },
          {
            type: 'block',
            block: 'component',
            source: 'ValidatedToken',
          },
          {
            type: 'block',
            block: 'component',
            source: 'GetToken',
          },
          {
            type: 'block',
            block: 'component',
            source: 'Role',
          },
          {
            type: 'block',
            block: 'component',
            source: 'User',
          },
          {
            type: 'block',
            block: 'component',
            source: 'AuthHeaderInterceptor',
          },
          {
            type: 'block',
            block: 'component',
            source: 'PrivilegeService',
          },
          {
            type: 'block',
            block: 'component',
            source: 'RestrictionService',
          },
        ],
      },
      {
        type: 'page',
        name: 'Accordion Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'AccordionModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'AccordionComponent',
          },
        ],
      },
      {
        type: 'page',
        name: 'Combobox Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'ComboboxModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'ComboboxComponent',
          },
        ],
      },
      {
        type: 'page',
        name: 'Breadcrumb Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'BreadcrumbModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'BreadcrumbComponent',
          },
        ],
      },
      {
        type: 'page',
        name: 'Card Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'CardModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'CardComponent',
          },
        ],
      },
      {
        type: 'page',
        name: 'Dynamic Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'DynamicModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'DynamicComponent',
          },
        ],
      },
      {
        type: 'page',
        name: 'Header Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'HeaderModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'HeaderComponent',
          },
          {
            type: 'block',
            block: 'component',
            source: 'HeaderService',
          },
        ],
      },
      {
        type: 'page',
        name: 'Perspective Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'PerspectiveModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'PerspectiveComponent',
          },
        ],
      },
      {
        type: 'page',
        name: 'Playground Module',
        icon: 'toastr.svg',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'PlaygroundModule',
          },
          {
            type: 'block',
            block: 'component',
            source: 'PlaygroundComponent',
          },
        ],
      },
    ],
  },
  {
    type: 'section',
    name: 'Directives',
    children: [
      {
        type: 'page',
        name: 'AutofocusDirective',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'AutofocusDirective',
          },
        ],
      },
      {
        type: 'page',
        name: 'Base64Directive',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'Base64Directive',
          },
        ],
      },
      {
        type: 'page',
        name: 'IsActiveRouteDirective',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'IsActiveRouteDirective',
          },
        ],
      },
      {
        type: 'page',
        name: 'LastDirective',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'LastDirective',
          },
        ],
      },
      {
        type: 'page',
        name: 'MaskDirective',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'MaskDirective',
          },
        ],
      },
      {
        type: 'page',
        name: 'HTMLParserDirective',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'HTMLParserDirective',
          },
        ],
      },
      {
        type: 'page',
        name: 'VariableDirective',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'VariableDirective',
          },
        ],
      },
      {
        type: 'page',
        name: 'VideoSnapshotDirective',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'VideoSnapshotDirective',
          },
        ],
      },
    ],
  },
  {
    type: 'section',
    name: 'Services',
    children: [
      {
        type: 'page',
        name: 'EndpointService',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'EndpointService',
          },
        ],
      },
    ],
  },
  {
    type: 'section',
    name: 'Pipes',
    children: [
      {
        type: 'page',
        name: 'FormatPipe',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'FormatPipe',
          },
        ],
      },
      {
        type: 'page',
        name: 'OrderPipe',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'OrderPipe',
          },
        ],
      },
      {
        type: 'page',
        name: 'SafeHTMLPipe',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'SafeHTMLPipe',
          },
        ],
      },
    ],
  },
];
