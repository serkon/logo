import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export class SliderItem {
  icon;
  abbr;
  title;
  description;
  url;
  classes;
}

@Component({
  selector: 'logo-idm',
  templateUrl: './idm.component.html',
  styleUrls: ['./idm.component.scss'],
})
export class IdmComponent implements AfterViewInit {
  public sliderItems: SliderItem[];
  private bodyHeight: number;
  public opinions = [1];

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
    console.log('Idm');
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
