import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { SliderItem } from '@paas/src/app/services/idm/idm.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'logo-ss',
  templateUrl: './ss.component.html',
  styleUrls: ['./ss.component.scss'],
})
export class SsComponent implements AfterViewInit {

  public sliderItems: SliderItem[];
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
        abbr: 'JSON Desteği',
        title: '',
        description: 'Ayarların tümü JSON formatı ile oluşturulur ve ayarlar arayüzü tamamen dinamik olarak tanımlanan bu JSON verisi üzerinden oluşturulur',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-02.svg',
        abbr: 'Çoklu Dil',
        title: '',
        description: 'Ayarlarınızı tanımlarken sizin için hazırlanmış olan özellik setleri sayesinde ayarınızın açıklamalarını ve arayüzde gözükmesini istediğiniz bilgileri kolayca yönetin',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-03.svg',
        abbr: 'Dinamik Bileşen',
        title: '',
        description: 'Ayarlarınız için tanımladığınız yapıda bulunan veri tiplerine göre arayüz input’ları otomatik olarak oluşsun',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-04.svg',
        abbr: 'Veritabanı Bağlantı Testi',
        title: '',
        description: 'Servisinize özel tanımladığınız veritabanı cümleciğini sizin için hazırlanmış olan özellik sayesinde bağlantınızı test edin ve hatalı bağlantı cümleciği girişinin önüne geçin',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-05.svg',
        abbr: 'Kullanıcı Aktarımı',
        title: '',
        description: 'Excel veya API uçları ile kullanıcılarınızı aktarın. Harici kimlik kaynaklarındaki kullanıcıları periyodik aralıklarla aktararak senkronize edin',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-06.svg',
        abbr: 'Arayüz Desteği',
        title: '',
        description: 'Servisiniz için tanımladığınız ayarınızda açılır kutu veya bir liste verisi barınması isteniyorsa combo ve editör özelliği sayesinde ayar arayüzü dinamik oluşsun',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-07.svg',
        abbr: 'Farklı Ortamlarda Depolama',
        title: '',
        description: 'Kullanmak istediğiniz veritabanı olarak MSSQL, PostgreSQL,  MongoDB, File veya Vault desteği sayesinde farklı RDBMS üzerinde ayarlarınızı çalıştırın',
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

