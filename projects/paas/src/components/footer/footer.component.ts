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
    {url: 'https://www.logo.com.tr/', display: 'Logo'},
    {url: 'https://www.logo.com.tr/logo-iletisim', display: 'İletişim'},
    {url: '#', display: 'Blog'},
    {url: 'https://kariyerim.logo.com.tr/logo/recruit', display: 'Kariyer'},
  ];

  legal = [
    {url: 'https://www.logo.com.tr/logo-telif-hakki', display: 'Telif Hakkı'},
    {url: 'https://www.logo.com.tr/logo-kullanim-kosullari', display: 'Kullanım Koşulları'},
    {url: 'https://www.logo.com.tr/logo-gizlilik-politikalari', display: 'Gizlilik'},
    {url: 'https://www.logo.com.tr/logo-kisisel-veriler', display: 'Kişisel Veriler'},
    {url: 'https://www.logo.com.tr/logo-cerez-politikasi', display: 'Çerez Politikası'},
  ];

  socials = [
    {url: 'https://twitter.com/logoyazilim', display: 'twitter'},
    {url: 'https://www.facebook.com/logoyazilim', display: 'facebook'},
    {url: 'https://www.youtube.com/user/LOGOYazilim', display: 'youtube'},
  ];

  constructor(public router: Router) {
  }
}
