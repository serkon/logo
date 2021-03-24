import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface SliderItem {
  icon: string;
  abbr: string;
  title: string;
  description: string;
  link: string;
  class: string;
}

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
        link: 'services/ss',
        class: '',
      },
      {
        icon: '/assets/images/home/section-03/comment.svg',
        abbr: 'MRS',
        title: 'Message Registry Service',
        description: 'Message Registry Servisi, Logo PaaS platformu içerisinde kayıtlı olan servislerin/uygulamaların birbirleri ile olan iletişiminden sorumludur. Amacı gönderilen mesajların hızlı, kayıpsız ve geriye yönelik sorgulanabilir şekilde iletilmesi sağlamaktadır.',
        link: 'services/mrs',
        class: '',
      },
      {
        icon: '/assets/images/home/section-03/keyhole.svg',
        abbr: 'JS',
        title: 'JS Service',
        description: 'Tüm LOGO uygulamaları ve servisleri için devamlı erişilebilir bir iş yürütme servisidir. REST tabanlı çalışan işleri desteklemektedir.',
        link: 'services/js',
        class: '',
      },
      {
        icon: '/assets/images/home/section-03/keyhole.svg',
        abbr: 'VVS',
        title: 'Veritabanı versiyonlama',
        description: 'LOGO ürünlerinin ve mikro servislerinin veritabanı şemalarını ve varsayılan kayıtlarını çok kullanıcılı bir şekilde yönetmek ve versiyonlamaktır. PostgreSql, MySql, SqlServer gibi veritabanlarını destekler.',
        link: 'services/vvs',
        class: '',
      },
      {
        icon: '/assets/images/home/section-03/keyhole.svg',
        abbr: 'HFS',
        title: 'Hangfire Service',
        description: 'LOGO ürünlerinin ve mikro servislerinin veritabanı şemalarını ve varsayılan kayıtlarını çok kullanıcılı bir şekilde yönetmek ve versiyonlamaktır. PostgreSql, MySql, SqlServer gibi veritabanlarını destekler.',
        link: 'services/hfs',
        class: '',
      },
      {
        icon: '/assets/images/home/section-03/keyhole.svg',
        abbr: 'EMS',
        title: 'Email Service',
        description: 'LOGO ürünleri ve mikro servisleri için tenant tabanlı, asenkron bir e-posta gönderme mekanizması sağlamaktır. Smtp, pop3, imap vb. e-posta protokollerini destekler.',
        link: 'services/ems',
        class: '',
      },
      {
        icon: '/assets/images/home/section-03/keyhole.svg',
        abbr: 'YS',
        title: 'Yerelliştirme Service',
        description: 'LOGO ürünleri ve mikro servisleri için tenant tabanlı, asenkron bir e-posta gönderme mekanizması sağlamaktır. Smtp, pop3, imap vb. e-posta protokollerini destekler.',
        link: 'services/ys',
        class: '',
      },
      {
        icon: '/assets/images/home/section-03/keyhole.svg',
        abbr: 'RS',
        title: 'Reporting Service',
        description: 'LOGO ürünleri ve mikro servisleri için tenant tabanlı, asenkron bir e-posta gönderme mekanizması sağlamaktır. Smtp, pop3, imap vb. e-posta protokollerini destekler.',
        link: 'services/rs',
        class: '',
      },
      {
        icon: '/assets/images/home/section-03/keyhole.svg',
        abbr: 'DS',
        title: 'Discovery Service',
        description: 'Keşif(Discovery) servisi, PAAS ortamında çalışan tüm LOGO uygulamalarına ve mikro servislerine hizmet veren bir servis kayıt ve keşif sunucusudur.',
        link: 'services/ds',
        class: '',
      },
      {
        icon: '/assets/images/home/section-03/controller.svg',
        abbr: 'DFS',
        title: 'Diagnose Features Service',
        description: 'PaaS platformu içerisindeki ve PaaS platformu ile entegre ettiğiniz servislerin sağlık durumlarını, birbirlerine olan bağımlılıklarını ve versiyonlarını görün ve takip edin.',
        link: 'services/dfs',
        class: '',
      },
      {
        icon: '/assets/images/home/section-03/controller.svg',
        abbr: 'RDF',
        title: 'Report Designer Features',
        description: 'Rapor Tasarlama Servis ile uygulamanız bünyesinde kullanabileceğiniz tasarım şablonları hazırlayın.',
        link: 'services/rdf',
        class: '',
      },
      {
        icon: '/assets/images/home/section-03/controller.svg',
        abbr: 'DAFS',
        title: 'Dashboard Features',
        description: 'Dashbord Servis ile farklı veri kaynaklarından (rest API, Veritabanı) çekilen verilerinizi görsel bileşenlere dönüştürün, Çoklu hesap (Multitenancy) desteğinden faydalanarak tek bir dashboard tanımı yapın, tasarladığınız dashbordu herkes kendi verisi ile görsün.',
        link: 'services/dafs',
        class: '',
      },
      {
        icon: '/assets/images/home/section-03/controller.svg',
        abbr: 'RCFS',
        title: 'Relase Control Features',
        description: 'Servis projelerinde yapılan isteklerin proje sorumluları tarafından bilgilendirilmesini, breaking changelerin ilgili servisi tüketenler tarafından bilgilendirilmesini, development / test / staging / production ortamlarında sürümlerinin yönetilmesini (durumları, sürüm bilgileri, kurulumu) kolayca sağlayın.',
        link: 'services/rcfs',
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
  }

  canvas() {
    const options: ParticleNetworkOption = {
      particleColor: '#c4e3ff',
      background: '#fff',
      interactive: true,
      speed: 'fast',
      density: 'low',
    };
  }

  resize() {
    this.bodyHeight = this.document.documentElement.clientHeight;
    this.sections = this.document.querySelectorAll('section');
    this.sections.forEach(section => {
      section.style.minHeight = `${this.bodyHeight}px`;
    });
  }
}
