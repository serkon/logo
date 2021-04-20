import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { SliderItem } from '@developer/src/app/services/idm/idm.component';

@Component({
  selector: 'logo-ms',
  templateUrl: './dfs.component.html',
  styleUrls: ['./dfs.component.scss'],
})
export class DfsComponent implements AfterViewInit {

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
        icon: '/assets/images/services/idm/section-04-09.svg',
        abbr: 'Swagger UI desteği',
        title: '',
        description: 'Swagger UI desteği sayesinde servis API uçları üzerinden diagnose verilerine kolayca erişin.\n',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-01.svg',
        abbr: 'Sağlık kontrolü desteği',
        title: '',
        description: 'PAAS ekosistemindeki servislerin ayakta olup olmadığını otomatik olarak belirli periyotlarda kontrol edin.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-02.svg',
        abbr: 'Failure uyarı desteği',
        title: '',
        description: 'Servisinizin herhangi bir bağımlılığından dolayı veya kendisinin fail olması durumunda ilgili servis yöneticisine mail gönderin ve süreçlerini otomatik yönetin.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-03.svg',
        abbr: 'Servis bağımlılıklarını inceleme desteği',
        title: '',
        description: 'Bir servisin yaşamını sürdürebilmesi için zorunlu veya opsiyonel olarak hangi servislere ihtiyaç duyabileceğini görüntüleyin ve bu servislerlerin sağlık durumlarını takip edin.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-04.svg',
        abbr: 'Java servisleri için configürasyon görüntüleme desteği',
        title: '',
        description: 'Ekosistemde Java destekli servislerin hangi konfigürasyonlara göre yaşamına devam ettiğini takip edin.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-05.svg',
        abbr: 'MSSQL ve PostgreSQL desteği',
        title: '',
        description: 'İkik farklı veritabanı desteği sayesinde farklı veritabanlarında bu bilgileri depolayın ve yönetin.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-06.svg',
        abbr: 'Yüksek ve kolay ölçeklenebilirlik',
        title: '',
        description: 'PaaS ekosisteminde çalışan Diagnose Servisi’nin ölçeklenebilirliği sayesinde istenildiği kadar servis bu ekosisteme dahil edilebilir.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-07.svg',
        abbr: 'Otomatik ve ayarlanabilir yeniden deneme',
        title: '',
        description: 'Bırakın Diagnose Servisi belirli aralıklarla servislerin ayakta olup olmadıklarını otomatik olarak kontrol etsin.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-08.svg',
        abbr: 'Kullanıcı arayüz desteği',
        title: '',
        description: 'Arayüz desteği sayesinde PaaS ekosisteminde yaşayan servisleri, servislerin birbirleri ile olan bağımlılıklarını, adreslerini, sağlık durumlarını ve konfigürasyon parametrelerini kolayca görüntüleyin.',
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
