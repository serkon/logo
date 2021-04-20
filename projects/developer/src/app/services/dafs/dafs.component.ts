import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { SliderItem } from '@developer/src/app/services/idm/idm.component';

@Component({
  selector: 'logo-ms',
  templateUrl: './dafs.component.html',
  styleUrls: ['./dafs.component.scss'],
})
export class DafsComponent implements AfterViewInit {

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
        abbr: 'Çoklu hesap (Multi Tenany) desteği',
        title: '',
        description: 'Çoklu Hesap (Multitenancy ) destekli ve kullanıcı özelinde veri…',
        url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65139772',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-02.svg',
        abbr: ' Dashboard yetkilendirme',
        title: '',
        description: 'Dashboard tanımlarken vereceğiniz yetki koduna sahip kullanıcılar sadece…',
        url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65139772',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-03.svg',
        abbr: 'Dinamik rest url desteği',
        title: '',
        description: 'Veri kaynağı tanımlarken Rest Url lerinizi Eureaka ya da Bulut Yönetim…',
        url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65139772',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-04.svg',
        abbr: 'Veri yenileme sıklığı',
        title: '',
        description: 'Verilerinizin yenilenme sıklığını veri kaynağı tanımında belirleyin.',
        url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65139772',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-05.svg',
        abbr: 'Hazır görsel bileşen kütüphanesi',
        title: '',
        description: 'Görsel bileşenlerinizi hazır görsel bileşen listesinden seçerek Görsel bileş…',
        url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65139772',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-06.svg',
        abbr: 'Esnek filtre tanımları',
        title: '',
        description: 'Dashboard tanımlarınıza filtreler ekleyin bu filtreler ile…',
        url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65139772',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-07.svg',
        abbr: 'Dinamik verili filtre tanımları',
        title: '',
        description: 'Dashboard bileşeneinize tanımladığınız filtrelerin içeriği değişken olarak…',
        url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65139772',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-08.svg',
        abbr: ' Esnek dashboard izleme',
        title: '',
        description: 'Embed modda da kullanabileceğiniz dashboar izleme sayfasında, ekle…',
        url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65139772',
        classes: '',
      },
    ];
  }

  ngAfterViewInit() {
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
