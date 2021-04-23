import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  quotes = [
    {story: 'Logo güvencesiyle uygulama geliştirmeye siz de başlayın!', author: 'Hazır mısınız?'},
    // {story: 'Good designs come from the heart, not from the brain', author: 'DANNY SENGERS'},
  ];

  corporate = [
    {
      abbr: 'IDM',
      title: 'Centeral Identitiy Management',
      link: 'services/idm',
    },
    {
      abbr: 'CCS',
      title: 'Cloud Control Service',
      link: 'services/cc',
    },
    {
      abbr: 'AS',
      title: 'Authorization Service',
      link: 'services/as',
    },
    {
      abbr: 'MS',
      title: 'Menu Service',
      link: 'services/ms',
    },
    {
      abbr: 'SS',
      title: 'Setting Service',
      link: 'services/ss',
    },
    {
      abbr: 'MRS',
      title: 'Message Registry Service',
      link: 'services/mrs',
    },
    {
      abbr: 'JS',
      title: 'JS Service',
      link: 'services/js',
    },
    {
      abbr: 'VVS',
      title: 'Veritabanı versiyonlama',
      link: 'services/vvs',
    },
    {
      abbr: 'HFS',
      title: 'Hangfire Service',
      link: 'services/hfs',
    },
    {
      abbr: 'EMS',
      title: 'Email Service',
      link: 'services/ems',
    },
    {
      abbr: 'YS',
      title: 'Yerelliştirme Service',
      link: 'services/ys',
    },
    {
      abbr: 'RS',
      title: 'Reporting Service',
      link: 'services/rs',
    },
    {
      abbr: 'DS',
      title: 'Discovery Service',
      link: 'services/ds',
    },
    {
      abbr: 'DFS',
      title: 'Diagnose Features Service',
      link: 'services/dfs',
    },
    {
      abbr: 'RDF',
      title: 'Report Designer Features',
      link: 'services/rdf',
    },
    {
      abbr: 'DAFS',
      title: 'Dashboard Features',
      link: 'services/dafs',
    },
    {
      abbr: 'RCFS',
      title: 'Relase Control Features',
      link: 'services/rcfs',
    },
  ];

  legal = [
    {url: 'https://www.logo.com.tr/logo-telif-hakki', display: 'Telif Hakkı'},
    {url: 'https://www.logo.com.tr/logo-kullanim-kosullari', display: 'Kullanım Koşulları'},
    {url: 'https://www.logo.com.tr/logo-gizlilik-politikalari', display: 'Gizlilik'},
    {url: 'https://www.logo.com.tr/logo-kisisel-veriler', display: 'Kişisel Veriler'},
    {url: 'https://www.logo.com.tr/logo-cerez-politikasi', display: 'Çerez Politikası'},
  ];

  socials = [
    {url: 'https://www.facebook.com/logoyazilim', display: 'Facebook'},
    {url: 'https://twitter.com/logoyazilim', display: 'Twitter'},
    {url: 'https://instagram.com/LOGOYazilim', display: 'Instagram'},
  ];

  constructor(public router: Router) {
  }
}
