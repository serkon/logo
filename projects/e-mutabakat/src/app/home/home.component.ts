import { Component, OnInit } from '@angular/core';

export enum PackageType {
  DAILY,
  MONTHLY,
  YEARLY,
}

@Component({
  selector: 'logo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public pageData =
    {
      id: '1',
      hero: {
        title: 'e-Mutabakat Kullanın, Hız Kazanın!',
        description: 'Maecenas tellus orci, consequat sollicitudin quam at, egestas tincidunt mauris. Pellentesque id lorem lacus. Vestibulum viverra eleifend elit.',
        gfx: '/assets/img/gfx-hero.png',
        placeholder: 'Mail Adresiniz',
        buttonText: '14 Gün Ücretsiz Deneyin',
      },
      cover: {
        title: 'Mutabakat Süreçlerinizde Hız Kazanın!',
        description: 'Firmanızın mutabakat süreçleri 3 adımda tamamlanıyor. Zamandan tasarruf ederek kolaylığın tadını çıkarın.',
        videoUrl: 'https://www.youtube.com/embed/L6EHnp23MzE',
      },
      screens: [
        {
          image: 'https://via.placeholder.com/491x340.png?text=Image1',
          title: 'Bulut avantajı',
          icon: 'https://via.placeholder.com/52x52.png?text=Icon',
          description: 'Bulut-tabanlı Logo Payroll ile herhangi bir donanım, kurulum ya da sistem bakım maliyeti olmadan, aylık ya da yıllık abonelik kiralama sistemiyle bordro işlemlerine hemen başlayın. Çözüme online olarak dilediğiniz yerden ve dilediğiniz cihazla bağlanın.',
          feature: {
            title: 'Bulut avantajı',
            description: 'Bulut-tabanlı Logo Payroll ile herhangi bir donanım, kurulum ya da sistem bakım maliyeti olmadan, aylık ya da yıllık abonelik kiralama sistemiyle bordro işlemlerine hemen başlayın. Çözüme online olarak dilediğiniz yerden ve dilediğiniz cihazla bağlanın.',
            items: [
              {
                icon: 'https://via.placeholder.com/52x52.png?text=Reference1',
                title: 'Çalışan Portalı',
                description: 'İzin talebi girişlerini, izin onay işlemlerini, bordro zarfı görüntüleme işlemlerini tablet üzerinden de yönetebilirsiniz.',
              },
              {
                icon: 'https://via.placeholder.com/52x52.png?text=Reference1',
                title: 'Ödeme Yönetimi',
                description: 'Dönem içinde birden fazla bordro görüntüleyebilir ve raporlayabilirsiniz. Gelir, kesinti, vergi, teşvik, ar-ge fiili hizmet gibi tutarların hesaplamasını kolayca yapabilirsiniz. Ayrıca zorunlu BES kesintisini puantajda otomatik hesaplayabilirsiniz.',
              },
              {
                icon: 'https://via.placeholder.com/52x52.png?text=Reference1',
                title: 'Organizasyon Yönetimi',
                description: 'Birimleri hiyerarşik olarak tanımlayabilir ve raporlayabilir, bölge-departman-pozisyon-ürün hattı-kademe ve yaka rengi bazında çalışan raporları oluşturabilir, organizasyon şeması üzerinde arama, filtreleme ve taşıma yapabilir, organizasyon şemasının görsel takibini ve dışarıya aktarımını yapabilirsiniz.',
              },
              {
                icon: 'https://via.placeholder.com/52x52.png?text=Reference1',
                title: 'Ücret Simülasyonu',
                description: 'Dönem bazında işveren maliyetlerini yasal parametrelere ve tahmini değerlere göre farklı senaryolar üzerinden hesaplayabilir, ücret/yan hak tutarlarında artış oranlarını tanımlayabilirsiniz.',
              },
              {
                icon: 'https://via.placeholder.com/52x52.png?text=Reference1',
                title: 'Çalışan Yönetimi',
                description: 'Çalışan kartı üzerinden tüm bilgilere erişebilir, işe giren ve işten ayrılan çalışanların tüm bilgilerini SGK’ya online bildirebilir, farklı çalışan grupları için farklı çalışma takvimleri oluşturabilirsiniz. ',
              },
              {
                icon: 'https://via.placeholder.com/52x52.png?text=Reference1',
                title: 'Zaman-Devam Yönetimi',
                description: 'İstediğiniz sayıda izin tipi oluşturabilir,otomatik izin hakediş hesaplamalarını yapabilir, vardiya gruplarının takibini yapabilir, izin onay süreçlerini yönetebilirsiniz.',
              },
            ],
          },
        },
        {
          image: 'https://via.placeholder.com/491x340.png?text=Image1',
          title: 'Bulut avantajı',
          icon: 'https://via.placeholder.com/52x52.png?text=Icon',
          description: 'Bulut-tabanlı Logo Payroll ile herhangi bir donanım, kurulum ya da sistem bakım maliyeti olmadan, aylık ya da yıllık abonelik kiralama sistemiyle bordro işlemlerine hemen başlayın. Çözüme online olarak dilediğiniz yerden ve dilediğiniz cihazla bağlanın.',
          feature: {
            title: 'Bulut avantajı',
            description: 'Bulut-tabanlı Logo Payroll ile herhangi bir donanım, kurulum ya da sistem bakım maliyeti olmadan, aylık ya da yıllık abonelik kiralama sistemiyle bordro işlemlerine hemen başlayın. Çözüme online olarak dilediğiniz yerden ve dilediğiniz cihazla bağlanın.',
            items: [
              {
                icon: 'https://via.placeholder.com/52x52.png?text=Reference1',
                title: 'Çalışan Portalı',
                description: 'İzin talebi girişlerini, izin onay işlemlerini, bordro zarfı görüntüleme işlemlerini tablet üzerinden de yönetebilirsiniz.',
              },
              {
                icon: 'https://via.placeholder.com/52x52.png?text=Reference1',
                title: 'Ödeme Yönetimi',
                description: 'Dönem içinde birden fazla bordro görüntüleyebilir ve raporlayabilirsiniz. Gelir, kesinti, vergi, teşvik, ar-ge fiili hizmet gibi tutarların hesaplamasını kolayca yapabilirsiniz. Ayrıca zorunlu BES kesintisini puantajda otomatik hesaplayabilirsiniz.',
              },
              {
                icon: 'https://via.placeholder.com/52x52.png?text=Reference1',
                title: 'Organizasyon Yönetimi',
                description: 'Birimleri hiyerarşik olarak tanımlayabilir ve raporlayabilir, bölge-departman-pozisyon-ürün hattı-kademe ve yaka rengi bazında çalışan raporları oluşturabilir, organizasyon şeması üzerinde arama, filtreleme ve taşıma yapabilir, organizasyon şemasının görsel takibini ve dışarıya aktarımını yapabilirsiniz.',
              },
              {
                icon: 'https://via.placeholder.com/52x52.png?text=Reference1',
                title: 'Ücret Simülasyonu',
                description: 'Dönem bazında işveren maliyetlerini yasal parametrelere ve tahmini değerlere göre farklı senaryolar üzerinden hesaplayabilir, ücret/yan hak tutarlarında artış oranlarını tanımlayabilirsiniz.',
              },
              {
                icon: 'https://via.placeholder.com/52x52.png?text=Reference1',
                title: 'Çalışan Yönetimi',
                description: 'Çalışan kartı üzerinden tüm bilgilere erişebilir, işe giren ve işten ayrılan çalışanların tüm bilgilerini SGK’ya online bildirebilir, farklı çalışan grupları için farklı çalışma takvimleri oluşturabilirsiniz. ',
              },
              {
                icon: 'https://via.placeholder.com/52x52.png?text=Reference1',
                title: 'Zaman-Devam Yönetimi',
                description: 'İstediğiniz sayıda izin tipi oluşturabilir,otomatik izin hakediş hesaplamalarını yapabilir, vardiya gruplarının takibini yapabilir, izin onay süreçlerini yönetebilirsiniz.',
              },
            ],
          },
        },
      ],
      packages: [
        {
          id: 'b6867510-55aa-4b01-aeff-9ba9af9f7501',
          title: 'Logo Payroll 51-500 çalışan',
          icon: 'https://via.placeholder.com/52x52.png?text=Reference1',
          price: {
            id: '2',
            cost: 100,
            symbol: '₺', // ₺, $, € iso standartı
            includeTax: false, // false
            currency: 'TRY', // EUR, TRY, USD iso standardı
            promo: 5,
            discount: 5,
          },
          properties: [
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7500',
              title: 'Bordro  yönetimi',
              isNew: true,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7501',
              title: 'Özlük bilgileri takibil',
              isNew: true,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7502',
              title: 'Puantaj işlemleri',
              isNew: true,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7503',
              title: 'Yan haklar yönetimil',
              isNew: true,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7504',
              title: 'Mevzuat takibi',
              isNew: true,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7505',
              title: 'Ücret Simülasyonul',
              isNew: false,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7506',
              title: 'Organizasyon Yönetimii',
              isNew: true,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7507',
              title: 'İzin Yönetimi',
              isNew: false,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7508',
              title: 'Çalışan Portalı',
              isNew: false,
            },
          ],
          type: 1,
        },
        {
          id: 'b6867510-55aa-4b01-aeff-9ba9af9f7502',
          title: 'Logo Payroll 501 ve üzeri çalışan',
          icon: 'https://via.placeholder.com/52x52.png?text=Reference1',
          price: {
            id: '3',
            cost: 150,
            symbol: '₺', // ₺, $, € iso standartı
            includeTax: false, // false
            currency: 'TRY', // EUR, TRY, USD iso standardı
            promo: 5,
            discount: 5,
          },
          properties: [
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7500',
              title: 'Bordro  yönetimi',
              isNew: true,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7501',
              title: 'Özlük bilgileri takibi',
              isNew: true,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7502',
              title: 'Puantaj işlemleri',
              isNew: true,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7503',
              title: 'Yan haklar yönetimil',
              isNew: true,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7504',
              title: 'Mevzuat takibi',
              isNew: true,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7505',
              title: 'Ücret Simülasyonul',
              isNew: false,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7506',
              title: 'Organizasyon Yönetimii',
              isNew: true,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7507',
              title: 'İzin Yönetimi',
              isNew: false,
            },
            {
              id: 'b6867510-55aa-4b01-aeff-9ba9af9f7508',
              title: 'Çalışan Portalı',
              isNew: false,
            },
          ],
          type: 2,
        },
      ],
      kpi: [
        {
          data: '1000',
          name: 'kayıtlı firma',
        },
        {
          data: '35.000',
          name: 'aylık mütabakat gönderimi',
        },
        {
          data: '₺ 6.000.000',
          name: 'mütabakat tutarı',
        },
        {
          data: '%70',
          name: 'cevaplama oranı',
        },
      ],
      references: [
        {
          id: 'b6867510-55aa-4b01-aeff-9ba9af9f7500',
          name: 'Reference1',
          link: 'https://google.com',
          image: 'https://via.placeholder.com/240x180.png?text=Reference1',
          productId: '1',
        },
        {
          id: 'b6867510-55aa-4b01-aeff-9ba9af9f7502',
          name: 'Reference2',
          link: 'https://google.com',
          image: 'https://via.placeholder.com/240x180.png?text=Reference2',
          productId: '2',
        },
        {
          id: 'b6867510-55aa-4b01-aeff-9ba9af9f7503',
          name: 'Reference3',
          link: 'https://google.com',
          image: 'https://via.placeholder.com/240x180.png?text=Reference3',
          productId: '3',
        },
      ],
      faqs: [
        {
          id: 'b6867510-55aa-4b01-aeff-9ba9af9f7500',
          title: 'Bordro programı nedir?',
          description: '<b>Son yıllarda çok sık duyduğunuz bir kavram olan bulut tabanlı yazılımların</b> avantajlarından biri, elektrik ya da internet bağlantısının kesilmesi durumlarında yapılan işlemlerin yarım kalmıyor oluşudur. Çünkü yeni nesil yazılım şirketleri, ürettikleri uygulamaları güvenli veri merkezleri olan datacanter\'larda tutar. Böylece, kesintisiz bir şekilde servis sağlar. Ayrıca bulut tabanlı uygulamalarda veri saklama maliyeti ya da donanım, yazılım maliyetleri de bulunmaz. Sakladığınız verilerin online ortamdaki güvenliği de oldukça önemlidir. Bulut tabanlı yazılımlar sayesinde uygulamanızın size sunduğu koruma ile verilerinizi yedekleyebilir ve koruyabilirsiniz. Tüm bunların dışında bulut tabanlı uygulamaya ister bilgisayarınızdan ister Android ya da iOS işletim sistemlerinden erişebilirsiniz. Bulut tabanlı Logo Payroll\'da da donanımsal bir maliyete gerek kalmadığı gibi sistem ya da bakım maliyeti altına da girilmez. Ayrıca dilediğiniz ortamdan ya da cihazdan online olarak bordro programına erişimi sağlamanız da mümkün hale gelir.',
          isOpen: true,
        },
        {
          id: 'b6867510-55aa-4b01-aeff-9ba9af9f7501',
          title: 'Online Bordro Programı’nın avantajı nedir?',
          description: 'Son yıllarda çok sık duyduğunuz bir kavram olan bulut tabanlı yazılımların avantajlarından biri, elektrik ya da internet bağlantısının kesilmesi durumlarında yapılan işlemlerin yarım kalmıyor oluşudur. Çünkü yeni nesil yazılım şirketleri, ürettikleri uygulamaları güvenli veri merkezleri olan datacanter\'larda tutar. Böylece, kesintisiz bir şekilde servis sağlar. Ayrıca bulut tabanlı uygulamalarda veri saklama maliyeti ya da donanım, yazılım maliyetleri de bulunmaz. Sakladığınız verilerin online ortamdaki güvenliği de oldukça önemlidir. Bulut tabanlı yazılımlar sayesinde uygulamanızın size sunduğu koruma ile verilerinizi yedekleyebilir ve koruyabilirsiniz. Tüm bunların dışında bulut tabanlı uygulamaya ister bilgisayarınızdan ister Android ya da iOS işletim sistemlerinden erişebilirsiniz. Bulut tabanlı Logo Payroll\'da da donanımsal bir maliyete gerek kalmadığı gibi sistem ya da bakım maliyeti altına da girilmez. Ayrıca dilediğiniz ortamdan ya da cihazdan online olarak bordro programına erişimi sağlamanız da mümkün hale gelir.',
          isOpen: false,
        },
        {
          id: 'b6867510-55aa-4b01-aeff-9ba9af9f7504',
          title: 'Bordro programı nedir?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, elit sit amet venenatis sagittis, augue diam consequat sem, sit amet vulputate arcu magna nec erat. Sed auctor neque in tempor tempor. Aenean fringilla mi sit amet dui volutpat placerat eget quis risus. Aenean tristique, massa et pulvinar bibendum, sem leo auctor nibh, vitae accumsan lorem lorem eget lacus. In ac pulvinar enim. Vestibulum mauris tortor, fermentum ac dignissim nec, pharetra vitae ex. Mauris a neque magna.Pellentesque sit amet sodales elit. Donec eget nisl nunc. Etiam viverra consequat justo sit amet sodales. Sed sit amet urna eu risus blandit luctus. Donec imperdiet rhoncus nibh, et suscipit elit congue vitae. Morbi scelerisque nisl sit amet massa interdum tempor. Praesent tortor dui, semper sed pulvinar a, mollis non mi.Phasellus feugiat est et purus semper, ut mattis sem viverra. Vestibulum id finibus lacus. Phasellus commodo porttitor ligula, nec rhoncus nulla mollis ac. Nunc convallis mauris magna, at aliquam nulla scelerisque in. Aenean pharetra nisi sit amet diam blandit suscipit. Cras aliquet dui nec interdum auctor. Nulla pulvinar feugiat ipsum ac lobortis. Fusce egestas rutrum quam quis volutpat. Nam sapien risus, convallis vitae mi vitae, semper malesuada purus. Phasellus eget risus semper, dapibus risus vitae, egestas eros. Proin varius erat id nibh interdum tincidunt. Pellentesque risus leo, ultrices ac porttitor nec, faucibus id ligula. Cras finibus turpis a metus maximus imperdiet.Donec faucibus turpis vitae ligula tincidunt, at molestie felis rutrum. Vivamus vitae quam ipsum. Nam feugiat velit eu purus eleifend sagittis. Donec mi enim, accumsan nec velit sit amet, lacinia fringilla elit. Duis sed diam non ligula rutrum cursus sit amet vitae risus. Nunc sed leo ut ex cursus venenatis non eget massa. Morbi scelerisque nisi ut mauris rutrum, at fringilla nisl congue. Aenean bibendum, nunc sit amet porttitor pretium, nisi magna vehicula tortor, sit amet condimentum metus sem nec ligula. Mauris dignissim interdum ipsum vel tristique.',
          isOpen: false,
        },
      ],
      contact: {
        contactTitle: 'Bize Ulaşın',
        contactAddress: 'Gebze Organize Sanayi Bölgesi Teknopark<br/>No: 609 Gebze 41480 Kocaeli - Türkiye',
        contactEmail: 'yardim@diyalogo.com.tr',
        supportTitle: 'Logo destek hizmet hattı',
        supportNumber: '+90 262 679 80 00',
      },
      footer: {
        logos: [
          {
            logo: '/assets/img/footer-logo-1.png',
            url: 'http://google.com',
          },
          {
            logo: '/assets/img/footer-logo-2.png',
            url: 'http://google.com',
          },
          {
            logo: '/assets/img/footer-logo-3.png',
            url: 'http://google.com',
          },
        ],
        sitemap: [
          {
            title: 'Linkler',
            links: [
              {
                name: 'Link 1',
                url: 'http://google.com',
              },
              {
                name: 'Link 2',
                url: 'http://google.com',
              },
              {
                name: 'Link 3',
                url: 'http://google.com',
              },
            ],
          },
          {
            title: 'Hakkımızda',
            links: [
              {
                name: 'Logo Yazılım Hakkında',
                url: 'http://google.com',
              },
              {
                name: 'Blog',
                url: 'http://google.com',
              },
              {
                name: 'İletişim ve Destek',
                url: 'http://google.com',
              },
            ],
          },
          {
            title: 'Bizi Takip Edin',
            links: [
              {
                name: 'Twitter',
                image: '/assets/img/footer-ico-twitter.png',
                url: 'http://google.com',
              },
              {
                name: 'Facebook',
                image: '/assets/img/footer-ico-fb.png',
                url: 'http://google.com',
              },
              {
                name: 'Instagram',
                image: '/assets/img/footer-ico-ig.png',
                url: 'http://google.com',
              },
            ],
          },
        ],
        supportLinks: [
          {
            title: 'Gizlilik Bildirimi',
            url: 'http://www.logo.com.tr',
          },
          {
            title: 'Kullanım Şartları',
            url: 'http://www.logo.com.tr',
          },
        ],
        copyright: 'Copyright 2016 Logo e-Business',
      },
    }

  public imageData;
  public appScreens;

  constructor() {
  }

  ngOnInit(): void {
    this.setScreens(this.pageData.screens);
  }

  public getImageContent(index: number) {
    this.imageData = this.pageData.screens[index];
  }

  public getMonthlyPackages() {
    return this.pageData.packages.filter((p) => {
      return p.type === PackageType.MONTHLY;
    });
  }

  public getYearlyPackages() {
    return this.pageData.packages.filter((p) => {
      return p.type === PackageType.YEARLY;
    });
  }

  private setScreens(data) {
    this.appScreens = [];
    data.forEach((val) => {
      this.appScreens.push(val.image);
    });
    this.getImageContent(0);
  }
}
