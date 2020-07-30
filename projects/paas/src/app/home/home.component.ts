import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SliderItem } from '@logo-software/carousel';

@Component({
  selector: 'logo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  public quotes;
  public sliderItems: SliderItem[];
  public companies = [
    {
      image: '/assets/images/home/section-04/isbasi.png',
      name: 'Isbasi',
      description: 'Küçük işletmeler için cepte, web’de ön muhasebe uygulamasıdır',
    },
    {
      image: '/assets/images/home/section-04/vyapari.png',
      name: 'V-yapari',
      description: 'Logo Yazılım’ın Hindistan vergi mevzuatına uygun olarak geliştirdiği SAAS uygulamadır.',
    },
    {
      image: '/assets/images/home/section-04/logo.png',
      name: 'Logo',
      description: 'İş Süreçlerinin tasarlanması, otomasyonu, ölçümlenmesi ve yönetimini sağlayan İş Süreçleri Yönetimi (BPM) uygulamasıdır.',
    },
    {
      image: '/assets/images/home/section-04/e-logo.png',
      name: 'E-Logo',
      description: 'Cepte ve web’de Kurumsal doküman yönetim uygulamasıdır.',
    },
  ];
  private bodyHeight: number;

  constructor(@Inject(DOCUMENT) private document) {
    this.sliderItems = [
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

  /** The Window object from Document defaultView */
  get window(): Window {
    return this.document.defaultView;
  }

  private _sections: HTMLElement[] = [];

  get sections() {
    return this._sections;
  }

  set sections(value) {
    this._sections = value;
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.resize();
  }

  ngAfterViewInit(): void {
    this.resize();
    this.canvas();
    console.log('Home Component');
  }

  canvas() {
    const options: ParticleNetworkOption = {
      particleColor: '#c4e3ff',
      background: '#fff',
      interactive: true,
      speed: 'fast',
      density: 'low',
    };
    // const p: ParticleNetwork = new ParticleNetwork(document.getElementById('particles'), options);
  }

  resize() {
    this.bodyHeight = this.document.documentElement.clientHeight;
    this.sections = this.document.querySelectorAll('section');
    this.sections.forEach(section => {
      section.style.minHeight = `${this.bodyHeight}px`;
    });
  }
}
