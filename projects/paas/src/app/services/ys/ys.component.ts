import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { SliderItem } from '@paas/src/app/services/idm/idm.component';

@Component({
  selector: 'logo-ms',
  templateUrl: './ys.component.html',
  styleUrls: ['./ys.component.scss'],
})
export class YsComponent implements AfterViewInit {

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
        abbr: 'Tek kaynak, kaynak Listesi veya toplu halde çekme',
        title: '',
        description: 'Yerelleştirme kaynaklaını ister tek tek, ister liste halinde isterseniz toplu olarak (zip dosyası şeklinde) alabilirsiniz.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-02.svg',
        abbr: 'Java uygulamaları için client desteği',
        title: '',
        description: 'Java uygulamaları, java client ‘ını kullanarak Raporlama Servisine kolayca entegre olabilirler.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-03.svg',
        abbr: 'Swagger UI destekli API uçları  ',
        title: '',
        description: 'Desteklenen API uçlarına Swagger UI üzerinden kolayca ulaşın\n',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-04.svg',
        abbr: 'Ölçeklenebilir yapı',
        title: '',
        description: 'Oturum bağımsız mimarisi ile Raporlama servisini çoklayarak kullanabilirsiniz.',
        url: '',
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
