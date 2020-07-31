import { Component } from '@angular/core';

@Component({
  selector: 'logo-carousel-showcase',
  templateUrl: './carousel-showcase.component.html',
  styleUrls: ['./carousel-showcase.component.scss'],
})
export class CarouselShowcaseComponent {

  sliderItems = [
    {
      icon: '/assets/images/home/section-03/user.svg',
      abbr: 'IDM',
      title: 'Centeral Identitiy Management',
      description: 'Uygulamaların kullanıcı veritabanını tutarak, kullanıcı kayıt ve giriş işlemleri güvenli olarak yönetir',
      link: 'services/idm',
      class: '',
    },
    {
      icon: '/assets/images/home/section-03/cloud.svg',
      abbr: 'CCS',
      title: 'Cloud Control Service',
      description: 'Logo PaaS platformundaki mikro servislerin ve uygulamaların ortak bilgilerini sağlar ve çoklu-kiracı (multi-tenancy) işlemlerini yönetir',
      link: 'services/cc',
      class: '',
    },
    {
      icon: '/assets/images/home/section-03/attribution.svg',
      abbr: 'AS',
      title: 'Authorization Service',
      description: 'Logo PaaS platformunda geliştirilen uygulamlar için yetki yönetimi işlemlerini yönetmektedir',
      link: 'services/as',
      class: '',
    },
    {
      icon: '/assets/images/home/section-03/menu.svg',
      abbr: 'MS',
      title: 'Menu Service',
      description: 'Masaüstü oluşturabildiği ve kullanıcıların kayıt olmuş uygulamaları aynı ortamda kullanmasını sağlayan bir servistir',
      link: 'services/ms',
      class: '',
    },
    {
      icon: '/assets/images/home/section-03/keyhole.svg',
      abbr: 'SS',
      title: 'Setting Service',
      description: 'Logo PaaS platformunda diğer mikro servislerin ayarlarını saklama ve gerektiğinde uygulamalara bu ayarları sağlama işlevlerini gerçekleştirir',
      link: '#',
      class: '',
    },
  ];

}
