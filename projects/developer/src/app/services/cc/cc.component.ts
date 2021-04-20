import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { SliderItem } from '@developer/src/app/services/idm/idm.component';

@Component({
  selector: 'logo-cc',
  templateUrl: './cc.component.html',
  styleUrls: ['./cc.component.scss'],
})
export class CcComponent implements AfterViewInit {

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
        abbr: 'SSO Desteği',
        title: '',
        description: 'Uygulamalarınızı Identity Management Service ile entegre ederek, uygulamalarınız arasında tek oturum açma (Single Sign On) desteğini sağlayın',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-02.svg',
        abbr: 'Şifre Güvenliğinden Emin Olun',
        title: '',
        description: 'Kullanıcı şifrelerinin güvenli bir şekilde (MD5, SHA1, SHA256, SHA384, SHA512 şifreleme yöntemleri ile ) tutulduğundan emin olun',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-03.svg',
        abbr: 'Şifre Karmaşıklığı ve Politikalarını Ayarlayın',
        title: '',
        description: 'Minimum uzunluk, Özel karakter gerekliliği, Türkçe karakter kontrolü, Büyük-küçük harf duyarlılığı, isim ve soyisim kontrolü, son x şifre ile aynı olmama kontrolü',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-04.svg',
        abbr: 'Oturum Açma Politikarını Ayarlayın',
        title: '',
        description: 'Belirlenen sayıda hatalı giriş yapan kullanıcı hesaplarını belirtilen süre kadar kilitleyin, pasife çekin, captcha doğrulaması isteyin',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-05.svg',
        abbr: 'Mevcut Kullanıcı Hesaplarınızı Kolayca Aktarın',
        title: '',
        description: 'Excel veya API uçları ile kullanıcılarınızı aktarın, Harici kimlik kaynaklarındaki kullanıcıları periyodik aralıklarla aktararak senkronize edin',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-06.svg',
        abbr: 'Swagger UI destekli API uçları',
        title: '',
        description: 'Desteklenen API uçlarına Swagger UI üzerinden kolayca ulaşın',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-07.svg',
        abbr: 'E-Posta doğrulama',
        title: '',
        description: 'Kullanıcı hesaplarını E-Posta adresleri ile doğrulatın',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-08.svg',
        abbr: 'Kullanıcı Onayından geçirin',
        title: '',
        description: 'Kullanıcılar kendilerini kaydedebilsin, Şifre sıfırlama ve değiştirme işlemlerini kullanıcının onay mekanizması desteği ile sağlayın',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-09.svg',
        abbr: 'Kullanıcı Hareketlerini İzleyin',
        title: '',
        description: 'Kullanıcı hesap giriş aksiyonlarını izleyin ve takip edin',
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
