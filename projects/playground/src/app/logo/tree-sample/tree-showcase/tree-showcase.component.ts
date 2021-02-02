import { Component, OnInit, ViewChild } from '@angular/core';
import { Tree, TreeComponent } from '@logo-software/tree';

@Component({
  selector: 'logo-tree-showcase',
  templateUrl: './tree-showcase.component.html',
  styleUrls: ['./tree-showcase.component.scss'],
})
export class TreeShowcaseComponent implements OnInit {

  public items: Tree[] = [{
    'id': 0,
    'name': 'Root 1',
    'iconClasses': 'le-alarm_bell_1 danger',
    'children': [
      {
        'id': 1,
        'name': 'Components',
        'group': true,
        'children': [
          {
            'id': 12,
            'name': 'Basics',
            'children': [
              {
                'id': 2003,
                'name': 'AccordionModule',
                'link': '/logo/accordion-sample/accordion-showcase/accordion-showcase.component',
                'role': 'ROLE_MENU_TOUR_REPORT',
                'children': [
                  {
                    'id': 2046,
                    'name': 'Raporlar ve Bildirimler',
                    'role': 'ROLE_MENU_DM_DESCRIPTION',
                    'link': '/main/domain/delivery/form',
                  },
                  {
                    'id': 2047,
                    'name': 'Tanımlar',
                    'children': [
                      {
                        'id': 33,
                        'name': 'Tutanak',
                        'link': '/main/domain/delivery/form',
                        'role': 'ROLE_MENU_DELIVERY_FORM',
                      },
                    ],
                    'role': 'ROLE_MENU_DM_TRANSACTIONS',
                  },
                ],
              },
              {
                'id': 2004,
                'name': 'CarouselModule',
                'link': '/logo/carousel-sample/carousel-showcase/carousel-showcase.component',
                'role': 'ROLE_MENU_ORDER_STATS',
              },
              {
                'id': 2012,
                'name': 'PagingModule',
                'link': '/logo/paging-sample/paging-showcase/paging-showcase.component',
                'role': 'ROLE_SLA_REPORT',
              },
              {
                'id': 2013,
                'name': 'PerspectiveModule',
                'link': '/logo/perspective-sample/perspective-showcase/perspective-showcase.component',
                'role': 'ROLE_SLA_DETAIL_REPORT',
              },
            ],
            'role': 'ROLE_MENU_CT_DESCRIPTION',
          },
          {
            'id': 2024,
            'name': 'Layout',
            'children': [
              {
                'id': 47,
                'name': 'DrawerModule',
                'link': '/logo/drawer-sample/drawer-showcase/drawer-showcase.component',
                'role': 'ROLE_MENU_DELIVERY_QUERY',
              },
              {
                'id': 48,
                'name': 'MarkdownModule',
                'link': '/logo/markdown-sample/markdown-showcase/markdown-showcase.component',
                'role': 'ROLE_MENU_DELIVERY_UPDATE',
              },
            ],
            'role': 'ROLE_MENU_CT_OPERATIONS',
          },
        ],
        'role': 'ROLE_MENU_CONTROL_TOWER',
      },
      {
        'id': 2,
        'name': 'Saha Yönetimi',
        'group': true,
        'children': [
          {
            'id': 2028,
            'name': 'Operasyonlar',
            'children': [
              {
                'id': 31,
                'name': 'İndirme İşlemleri',
                'children': [
                  {
                    'id': 2079,
                    'name': 'Araç Karşıla',
                    'link': '/main/domain/xdock/tour/arrive',
                    'role': 'ROLE_MENU_TOUR_ARRIVE',
                  },
                  {
                    'id': 2080,
                    'name': 'Araç İndir',
                    'link': '/main/domain/xdock/vehicle/unload',
                    'role': 'ROLE_MENU_VEHICLE_UNLOAD',
                  },
                  {
                    'id': 2081,
                    'name': 'Kafes İndir',
                    'link': '/main/domain/xdock/cage/unload',
                    'role': 'ROLE_MENU_CAGE_UNLOAD',
                  },
                ],
                'role': 'ROLE_MENU_XDOCK_CONTROL',
              },
              {
                'id': 27,
                'name': 'Yükleme İşlemleri',
                'children': [
                  {
                    'id': 2074,
                    'name': 'Kafes Oluştur',
                    'link': '/main/domain/warehouse/cage/setup',
                    'role': 'ROLE_MENU_CAGE_CREATE',
                  },
                  {
                    'id': 2076,
                    'name': 'Sefer Oluştur',
                    'link': '/main/domain/warehouse/tour/create',
                    'role': 'ROLE_MENU_TOUR_CREATE',
                  },
                  {
                    'id': 2077,
                    'name': 'Araç Yükle',
                    'link': '/main/domain/warehouse/vehicle/load',
                    'role': 'ROLE_MENU_TOUR_LOAD',
                  },
                ],
                'role': 'ROLE_MENU_WAREHOUSE',
              },
              {
                'id': 49,
                'name': 'Zimmet İşlemleri',
                'children': [
                  {
                    'id': 2071,
                    'name': 'Müşteriye İade Et',
                    'link': '/main/domain/delivery/custody/return',
                    'role': 'ROLE_MENU_TAKE_CUSTODY_RETURN',
                  },
                  {
                    'id': 2072,
                    'name': 'Tutanak Yükle',
                    'link': '/main/domain/delivery/custody/upload',
                    'role': 'ROLE_MENU_TAKE_CUSTODY_UPLOAD',
                  },
                  {
                    'id': 2073,
                    'name': 'Zimmet Al',
                    'link': '/main/domain/delivery/custody/take',
                    'role': 'ROLE_MENU_TAKE_CUSTODY',
                  },
                  {
                    'id': 2075,
                    'name': 'Müşteriden Kabul Et',
                    'link': '/main/domain/warehouse/cage/load',
                    'role': 'ROLE_MENU_DELIVERY_ACCEPT',
                  },
                ],
                'role': 'ROLE_MENU_TAKE_CUSTODY',
              },
              {
                'id': 50,
                'name': 'Gönderi Dağıt',
                'link': '/main/domain/delivery/dispatch/deal',
                'role': 'ROLE_MENU_DISPATCH',
              },
              {
                'id': 2001,
                'name': 'Gönderi Ata',
                'link': '/main/domain/delivery/dispatch/assign',
                'role': 'ROLE_MENU_DISPATCH',
              },
              {
                'id': 2000,
                'name': 'Taşımacı Onay',
                'link': '/main/domain/courier/approve-departure',
                'role': 'ROLE_MENU_DISPATCH',
              },
            ],
            'role': 'ROLE_MENU_FM_TRANSACTIONS',
          },
        ],
        'classes': 'demo-class',
        'role': 'ROLE_MENU_FIELD_OP',
      },
      {
        'id': 7,
        'name': 'Döküman Yönetimi',
        'children': [
          {
            'id': 2046,
            'name': 'Raporlar ve Bildirimler',
            'role': 'ROLE_MENU_DM_DESCRIPTION',
            'link': '/main/domain/delivery/form',
          },
          {
            'id': 2047,
            'name': 'Tanımlar',
            'children': [
              {
                'id': 33,
                'name': 'Tutanak',
                'link': '/main/domain/delivery/form',
                'role': 'ROLE_MENU_DELIVERY_FORM',
              },
            ],
            'role': 'ROLE_MENU_DM_TRANSACTIONS',
          },
        ],
        'role': 'ROLE_MENU_DOCUMENT_MGN',
      },
    ],
    'role': 'ROLE_MENU_ROOT',
  }];
  @ViewChild(TreeComponent, {read: TreeComponent}) tree: TreeComponent;

  constructor() {
  }

  ngOnInit(): void {
  }

  padding(value: string | number) {
    this.tree.setPadding(Number(value));
  }

}
