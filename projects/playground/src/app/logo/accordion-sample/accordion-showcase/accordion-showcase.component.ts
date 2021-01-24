import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@logo-software/accordion';

@Component({
  selector: 'logo-accordion-showcase',
  templateUrl: './accordion-showcase.component.html',
  styleUrls: ['./accordion-showcase.component.scss'],
})
export class AccordionShowcaseComponent implements OnInit {

  public items: MenuItem[] = [{
    'id': 0,
    'name': 'Root',
    'children': [
      {
        'id': 1,
        'name': 'Control Tower',
        'children': [
          {
            'id': 12,
            'name': 'Raporlar ve Bildirimler',
            'children': [
              {
                'id': 2003,
                'name': 'Sefer Raporu',
                'link': '/main/report/operation',
                'role': 'ROLE_MENU_TOUR_REPORT',
              },
              {
                'id': 2004,
                'name': 'Sipariş Raporu',
                'link': '/main/report/order-stats',
                'role': 'ROLE_MENU_ORDER_STATS',
              },
              {
                'id': 2012,
                'name': 'SLA Raporu',
                'link': '/main/report/sla',
                'role': 'ROLE_SLA_REPORT',
              },
              {
                'id': 2013,
                'name': 'SLA Detay Raporu',
                'link': '/main/report/sladetail',
                'role': 'ROLE_SLA_DETAIL_REPORT',
              },
            ],
            'role': 'ROLE_MENU_CT_DESCRIPTION',
          },
          {
            'id': 2024,
            'name': 'Operasyonlar',
            'children': [
              {
                'id': 47,
                'name': 'Gönderi Sorgula',
                'link': '/main/domain/delivery/transaction',
                'role': 'ROLE_MENU_DELIVERY_QUERY',
              },
              {
                'id': 48,
                'name': 'Sorunlu Adres',
                'link': '/main/domain/delivery/update',
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
