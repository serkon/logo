import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { SliderItem } from '@paas/src/app/services/idm/idm.component';

@Component({
  selector: 'logo-ms',
  templateUrl: './ems.component.html',
  styleUrls: ['./ems.component.scss'],
})
export class EmsComponent implements AfterViewInit {

  public sliderItems: SliderItem[];
  public opinions = [1];
  public boxes = [
    {
      icon: '/assets/images/services/cc/section-02-icon-01.svg',
      description: 'Uygulama tanımlarınızı, ürünleştirerek API uçları ya da arayüzleri kullanarak Bulut Yönetim Servisine tanımlayın.',
    },
    {
      icon: '/assets/images/services/cc/section-02-icon-02.svg',
      description: 'Hesaplarınızı API uçları ya da arayüzler yardımıyla kolayca tanımlayın.',
    },
    {
      icon: '/assets/images/services/cc/section-02-icon-03.svg',
      description: 'Hesap kullanıcılarızı ve uygulama yetkilerini arayüzler ya da API uçları ile yönetin.',
    },
    {
      icon: '/assets/images/services/cc/section-02-icon-04.svg',
      description: 'Hesabınız oluşurken durumunu Kafka mesajları ile takip edin.',
    },
    {
      icon: '/assets/images/services/cc/section-02-icon-05.svg',
      description: 'Hesaba kullanıcı tanımlama işlemlerini E-Posta aktivasyonları ile kullanıcı onayından geçirin.',
    },
    {
      icon: '/assets/images/services/cc/section-02-icon-06.svg',
      description: 'Sunucu tanımlarınızı yapın ve uygulamanızın hangi sunucuda çalışacağını bulut yönetim servisine bırakın.',
    },
  ];
  private bodyHeight: number;

  constructor(@Inject(DOCUMENT) private document) {
    this.sliderItems = [
      {
        icon: '/assets/images/services/idm/section-04-01.svg',
        abbr: 'Uygulamalarınızın menüleri için merkezi yönetim',
        title: '',
        description: 'Hesabınıza tanımlı uygulamaların menülerini bir yerden yönetin',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-02.svg',
        abbr: 'Çoklu Hesap (Multitenant) İşlemleri',
        title: '',
        description: 'Kullanıcı şifrelerinin güvenli bir şekilde (MD5, SHA1, SHA256, SHA384, SHA512 şifreleme yöntemleri ile ) tutulduğundan emin olun',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-03.svg',
        abbr: 'Hızlı Kısayol İşlemleri',
        title: '',
        description: 'Verilen yetkiler doğrultusunda kısayollarınızı görüntüleyip, sürükle, bırak ie işlemlerinizi hızlıca tamamlayın',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-04.svg',
        abbr: 'Masaüstünüzü Tasarlayın',
        title: '',
        description: 'Tamamen kişisel masaüstünüzü oluşturup hemen kullanmaya başlayın',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-05.svg',
        abbr: 'Aradığınızı Bulun',
        title: '',
        description: 'Her ekranda sizi karşılayan arama çubukları yardımıyla menü ve kısayollarınıza anında hızlı erişim sağlayın',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-06.svg',
        abbr: 'Uygulamalar içerisinde arama',
        title: '',
        description: 'Menü serviste yapılan aramalar, kayıtlı uygulamalar içerisinde de gerçekleşsin',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-07.svg',
        abbr: 'Swagger UI Destekli API Uçları  ',
        title: '',
        description: 'Desteklenen API uçlarına Swagger UI üzerinden kolayca ulaşın',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-08.svg',
        abbr: 'Çoklu Dil Desteği',
        title: '',
        description: 'Menü servis ile tek bir adımda sayfalarınızın dilini değiştirin',
        url: '',
        classes: '',
      },
    ];
  }

  ngAfterViewInit() {
    console.log('CC');
    this.resize();
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.resize();
  }

  resize() {
    this.bodyHeight = this.document.documentElement.clientHeight;
    this.document.querySelector('section.one').style.minHeight = `${this.bodyHeight}px`;
  }
}
