import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public footerContents = {
    logo: '/assets/img/logo-sub.png',
    sitemap: [
      {
        title: 'Legal',
        links: [
          {
            name: 'Telif Hakkı',
            link: 'http://www.google.com',
          },
          {
            name: 'Kullanım Koşulları',
            link: 'http://www.google.com',
          },
          {
            name: 'Gizlilik',
            link: 'http://www.google.com',
          },
        ],
      },
      {
        title: 'Polaris',
        links: [
          {
            name: 'Tüm Ürünler',
            link: 'http://www.google.com',
          },
          {
            name: 'Bize Yazın',
            link: 'http://www.google.com',
          },
        ],
      },
      {
        title: 'Logo Yazılım',
        links: [
          {
            name: 'Tüm Ürünler',
            link: 'http://www.google.com',
          },
          {
            name: 'Kampanyalar',
            link: 'http://www.google.com',
          },
          {
            name: 'Sektörler',
            link: 'http://www.google.com',
          },
          {
            name: 'Eğitimler',
            link: 'http://www.google.com',
          },
        ],
      },
    ],
  }

  constructor() { }

  ngOnInit(): void {
  }

}
