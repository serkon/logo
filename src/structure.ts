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
        name: 'Link Module',
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
      {
        type: 'page',
        name: 'StorageClass',
        children: [
          {
            type: 'block',
            block: 'component',
            source: 'StorageService',
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
