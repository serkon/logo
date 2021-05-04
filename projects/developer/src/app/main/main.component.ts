import { Component } from '@angular/core';

export interface SliderItem {
  abbr: string;
  title: string;
  description: string;
  link: string;
  class: string;
}

export interface Feedback {
  image: string;
  description: string;
  name: string;
}

@Component({
  selector: 'logo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public sliderItems: SliderItem[] = [
    {
      abbr: 'IDM',
      title: 'Centeral Identitiy Management',
      description: 'Uygulamaların kullanıcı veritabanını tutarak, kullanıcı kayıt ve giriş işlemleri güvenli olarak yönetir',
      link: 'services/idm',
      class: '',
    },
    {
      abbr: 'CCS',
      title: 'Cloud Control Service',
      description: 'Logo PaaS platformundaki mikro servislerin ve uygulamaların ortak bilgilerini sağlar ve çoklu-kiracı (multi-tenancy) işlemlerini yönetir',
      link: 'services/cc',
      class: '',
    },
    {
      abbr: 'AS',
      title: 'Authorization Service',
      description: 'Logo PaaS platformunda geliştirilen uygulamlar için yetki yönetimi işlemlerini yönetmektedir',
      link: 'services/as',
      class: '',
    },
    {
      abbr: 'MS',
      title: 'Menu Service',
      description: 'Masaüstü oluşturabildiği ve kullanıcıların kayıt olmuş uygulamaları aynı ortamda kullanmasını sağlayan bir servistir',
      link: 'services/ms',
      class: '',
    },
    {
      abbr: 'SS',
      title: 'Setting Service',
      description: 'Logo PaaS platformunda diğer mikro servislerin ayarlarını saklama ve gerektiğinde uygulamalara bu ayarları sağlama işlevlerini gerçekleştirir',
      link: 'services/ss',
      class: '',
    },
    {
      abbr: 'MRS',
      title: 'Message Registry Service',
      description: 'Message Registry Servisi, Logo PaaS platformu içerisinde kayıtlı olan servislerin/uygulamaların birbirleri ile olan iletişiminden sorumludur. Amacı gönderilen mesajların hızlı, kayıpsız ve geriye yönelik sorgulanabilir şekilde iletilmesi sağlamaktadır.',
      link: 'services/mrs',
      class: '',
    },
    {
      abbr: 'JS',
      title: 'Job Service',
      description: 'Tüm LOGO uygulamaları ve servisleri için devamlı erişilebilir bir iş yürütme servisidir. REST tabanlı çalışan işleri desteklemektedir.',
      link: 'services/js',
      class: '',
    },
    {
      abbr: 'VVS',
      title: 'Veritabanı versiyonlama',
      description: 'LOGO ürünlerinin ve mikro servislerinin veritabanı şemalarını ve varsayılan kayıtlarını çok kullanıcılı bir şekilde yönetmek ve versiyonlamaktır. PostgreSql, MySql, SqlServer gibi veritabanlarını destekler.',
      link: 'services/vvs',
      class: '',
    },
    {
      abbr: 'HFS',
      title: 'Hangfire Service',
      description: 'LOGO ürünlerinin ve mikro servislerinin veritabanı şemalarını ve varsayılan kayıtlarını çok kullanıcılı bir şekilde yönetmek ve versiyonlamaktır. PostgreSql, MySql, SqlServer gibi veritabanlarını destekler.',
      link: 'services/hfs',
      class: '',
    },
    {
      abbr: 'EMS',
      title: 'Email Service',
      description: 'LOGO ürünleri ve mikro servisleri için tenant tabanlı, asenkron bir e-posta gönderme mekanizması sağlamaktır. Smtp, pop3, imap vb. e-posta protokollerini destekler.',
      link: 'services/ems',
      class: '',
    },
    {
      abbr: 'YS',
      title: 'Yerelliştirme Service',
      description: 'LOGO ürünleri ve mikro servisleri için tenant tabanlı, asenkron bir e-posta gönderme mekanizması sağlamaktır. Smtp, pop3, imap vb. e-posta protokollerini destekler.',
      link: 'services/ys',
      class: '',
    },
    {
      abbr: 'RS',
      title: 'Reporting Service',
      description: 'LOGO ürünleri ve mikro servisleri için tenant tabanlı, asenkron bir e-posta gönderme mekanizması sağlamaktır. Smtp, pop3, imap vb. e-posta protokollerini destekler.',
      link: 'services/rs',
      class: '',
    },
    {
      abbr: 'DS',
      title: 'Discovery Service',
      description: 'Keşif(Discovery) servisi, PAAS ortamında çalışan tüm LOGO uygulamalarına ve mikro servislerine hizmet veren bir servis kayıt ve keşif sunucusudur.',
      link: 'services/ds',
      class: '',
    },
    {
      abbr: 'DFS',
      title: 'Diagnose Features Service',
      description: 'PaaS platformu içerisindeki ve PaaS platformu ile entegre ettiğiniz servislerin sağlık durumlarını, birbirlerine olan bağımlılıklarını ve versiyonlarını görün ve takip edin.',
      link: 'services/dfs',
      class: '',
    },
    {
      abbr: 'RDF',
      title: 'Report Designer Features',
      description: 'Rapor Tasarlama Servis ile uygulamanız bünyesinde kullanabileceğiniz tasarım şablonları hazırlayın.',
      link: 'services/rdf',
      class: '',
    },
    {
      abbr: 'DAFS',
      title: 'Dashboard Features',
      description: 'Dashbord Servis ile farklı veri kaynaklarından (rest API, Veritabanı) çekilen verilerinizi görsel bileşenlere dönüştürün, Çoklu hesap (Multitenancy) desteğinden faydalanarak tek bir dashboard tanımı yapın, tasarladığınız dashbordu herkes kendi verisi ile görsün.',
      link: 'services/dafs',
      class: '',
    },
    {
      abbr: 'RCFS',
      title: 'Relase Control Features',
      description: 'Servis projelerinde yapılan isteklerin proje sorumluları tarafından bilgilendirilmesini, breaking changelerin ilgili servisi tüketenler tarafından bilgilendirilmesini, development / test / staging / production ortamlarında sürümlerinin yönetilmesini kolayca sağlayın.',
      link: 'services/rcfs',
      class: '',
    },
  ];
  public feedbacks: Feedback[] = [
    {
      image: '/assets/images/main/user.svg',
      description: '“Mesaj Kayıt Servisi ile Logo PaaS platformu içerisinde kayıtlı olan mikroservis veya uygulamalarınızın birbirleri ile haberleşmesini sağlayın.”',
      name: 'Aslı Yılmaz',
    },
    {
      image: '/assets/images/main/user.svg',
      description: '“Mesaj Kayıt Servisi ile Logo PaaS platformu içerisinde kayıtlı olan mikroservis veya uygulamalarınızın birbirleri ile haberleşmesini sağlayın.”',
      name: 'Aslı Yılmaz',
    },
  ];
}
