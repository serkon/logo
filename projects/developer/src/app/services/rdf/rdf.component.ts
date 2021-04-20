import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { SliderItem } from '@developer/src/app/services/idm/idm.component';

@Component({
  selector: 'logo-ms',
  templateUrl: './rdf.component.html',
  styleUrls: ['./rdf.component.scss'],
})
export class RdfComponent implements AfterViewInit {

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
        icon: '/assets/images/services/rcfs/rcfs-check-1.svg',
        abbr: '',
        title: '',
        description: 'Veri kaynağı ve Önizleme uçlarını dilediğiniz sayıda tanımlayın, tasarım yaptıktan sonra önizleme adımıyla sonucu beklemeden görün.',
        url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65140494',
        classes: '',
      },
      {
        icon: '/assets/images/services/rcfs/rcfs-check-1.svg',
        abbr: '',
        title: '',
        description: 'Veri kaynağı tanımlarınızı parametrik olarak (Kullanıcıya göre, Hesaba göre ) yapın',
        url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65140494',
        classes: '',
      },
      {
        icon: '/assets/images/services/rcfs/rcfs-check-1.svg',
        abbr: '',
        title: '',
        description: 'Rapor şablonunuzda yanlış yapmaktan korkmayın, kaydetmeden önceki haline geri dönebilir, yaptığınız değişiklikleri tanımlı kısayolları kullanarak geri…',
        url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65140494',
        classes: '',
      },
      {
        icon: '/assets/images/services/rcfs/rcfs-check-1.svg',
        abbr: '',
        title: '',
        description: 'Tasarm Şablonu üzerine koyduğunuz her alan için koşullar tanımlayarak istediğiniz sayfada görünmesini istemediğiniz sayfada görünmemesini sağlayın.',
        url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65140494',
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
