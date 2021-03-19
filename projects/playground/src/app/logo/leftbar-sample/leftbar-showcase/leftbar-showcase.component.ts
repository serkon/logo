import { Component, OnInit } from '@angular/core';

import { LeftbarService, PaasUser } from '@logo-software/leftbar';

@Component({
  selector: 'logo-leftbar-showcase',
  templateUrl: './leftbar-showcase.component.html',
  styleUrls: ['./leftbar-showcase.component.scss'],
})
export class LeftbarShowcaseComponent implements OnInit {

  public TheUser: PaasUser = {
    name: 'Oprah Winfrey',
    title: 'HR Director',
    avatar: 'https://randomuser.me/api/portraits/women/82.jpg',
    notifications: 5,
    infos: [
      {
        col: 12,
        reference: 'notifications',
        desc: 'HR, Ayna, Jplatform',
        title: 'BİLDİRİMLER',
        badge: true,
        count: 5,
        link: 'path/to/notifications',
      },
      {
        col: 6,
        reference: 'language',
        desc: 'Türkçe',
        title: 'DİL',
        actionParam: 'Qwertyuiop1234567890',
      },
      {
        col: 6,
        reference: 'timezone',
        title: 'SAAT DİLİMİ',
        desc: 'GMT +3',
        count: 12,
      },
      {
        col: 3,
        reference: 'summary',
        icon: 'le-check_badge',
        desc: '12',
        actionParam: 'Qwertyuiop1234567890',
      },
      {
        col: 3,
        reference: 'summary',
        icon: 'le-flash',
        desc: '12',
        actionParam: 'Qwertyuiop1234567890',
      },
      {
        col: 3,
        reference: 'summary',
        icon: 'le-folder',
        desc: '12',
        actionParam: 'Qwertyuiop1234567890',
      },
      {
        col: 3,
        reference: 'summary',
        icon: 'le-tool_box',
        desc: '12',
        actionParam: 'Qwertyuiop1234567890',
      },
    ],
    links: [
      {
        name: 'Profilime git',
        link: '/go/to/profile',
      },
      {
        name: 'Hesap Ayarları',
        link: '/account/settings',
      },
      {
        name: 'Çıkış yap',
        link: '/logout',
      },
    ],
    tenants: {
      default: 'LOGO YAZILIM CORP.',
      options: [
        {
          name: 'LOGO YAZILIM CORP.',
          id: '1234567890',
        },
        {
          name: 'TEST ROBOTRONİK SANAYİ',
          id: '1234567890',
        },
      ],
    },
    applications: {
      default: 'assets/sample-app-logo.png',
      defaultIcon: 'assets/sample-app-icon.png',
      options: [
        {
          logo: 'assets/sample-app-logo.png',
          name: 'J-Platform',
          id: '1234567890',
        },
      ],
    },
    shortcuts: [
      {
        icon: 'assets/sample-app-icon.svg',
        class: 'primary',
        name: 'Saha Yönetimi',
        link: '/path/to/app',
      },
      {
        icon: 'assets/sample-app-icon.svg',
        class: 'success',
        name: 'Veri Analizi',
        link: '/path/to/app',
      },
      {
        icon: 'assets/sample-app-icon.svg',
        class: 'warning',
        name: 'Kurumsal Kaynak Yönetimi',
        link: '/path/to/app',
      },
    ],
  }

  constructor(private leftbarService: LeftbarService) {
  }

  ngOnInit(): void {
    this.leftbarService.userDataLoad.next(this.TheUser);
  }

  public sampleAddShortcut() {
    console.log('### Add Shorcut Action');
  }

  public sampleSaveAction() {
    console.log('### Save Action');
  }

  public sampleHomeAction() {
    console.log('### Home Clicked');
  }

  public sampleTenantAction(id) {
    console.log('### Tanent Action' + id);
  }

  public sampleAppAction(id) {
    console.log('### Application Action' + id);
  }

  public sampleSettingsAction() {
    console.log('### Settings');
  }

  public sampleLangAction(id: string) {
    console.log(id);
  }

  public sampleSearchAction(val) {
    console.log('### Search For:' + val);
  }

  public sampleInfoReqAction(val) {
    console.log('### Get Info For:' + val);
  }

  public sampleUserDataGet() {
    console.log('### Sample Data Get');
  }

}
