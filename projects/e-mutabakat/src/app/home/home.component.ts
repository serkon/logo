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
        title: 'e-Mutabakat Kullanın, Geleceği Yakalayın!',
        description: 'Mutabakat işlemleriniz için dijital ortamın avantajlarından yararlanın, operasyonel iş yükünüzü azaltın.',
        gfx: '/assets/img/gfx-hero.png',
        information: 'Çalıştığınız firmalarla yaptığınız beyanname alış (BA), beyanname satış (BS) ve Cari Bakiye mutabakatlarınızı posta, telefon ve faks ile iletmek yerine elektronik ortamda e-mail, SMS ve faks yoluyla gönderin, zamandan kazanın. Üstelik mutabakatlarınızın cevaplanması için ücretsiz hatırlatıcı ile işlem takibinizi kolaylaştırın, süreçlerinizi daha hızlı tamamlayın.',
        cta_description: 'Hiçbir işlem sınırlaması olmadan 60 gün süre ile ücretsiz kullanıma başlayabilmek için üye olun! ',
        buttonText: 'Ücretsiz Deneyin',
        buttonUrl: 'https://e-mutabakat.logo.com.tr/Account/Register',
      },
      cover: {
        title: 'Mutabakat Süreçlerinizde Hız Kazanın!',
        description: 'Firmanızın mutabakat süreçlerini kolay , hızlı ve güvenle yönetebilmeniz amacıyla geliştirilen eLogo e-Mutabakat ile çalıştığınız firmalarla yapacağınız mutabakatlarınızda manuel işyüküne son verin ve 3 adımda sürecinizi tamamlayın.',
        videoUrl: 'https://www.youtube.com/embed/L6EHnp23MzE',
      },
      screens: [
        {
          image: 'https://via.placeholder.com/491x340.png?text=Image1',
          title: 'Bulut avantajı',
          icon: 'https://via.placeholder.com/52x52.png?text=Icon',
          description: 'Bulut tabanlı sunduğumuz uygulamamız ile herhangi bir kurulum gerçekleştirmeden , online olarak dilediğiniz yerden ve istediğiniz cihazınızla bağlanabilirsiniz.',
          feature: {
            title: 'e-Mutabakat’ın Avantajları',
            description: 'Mutabakat süreçlerinizi dijitalleştirerek zamandan tasarruf sağlamaya ve yüksek oranda geri dönüşler almaya hemen başlayın.',
            items: [
              {
                icon: '/assets/img/ico_hiz.png',
                title: 'Hız',
                description: 'Telefon, posta, faks trafiğine son verin, mutabakat süreçlerinizi hızlandırabilirsiniz.',
              },
              {
                icon: '/assets/img/ico_kontrol.png',
                title: 'Anlık Kontrol',
                description: 'Detaylı raporlama ile giden mutabakat mektuplarınızın karşı tarafa ulaşıp ulaşmadığı bilgisine kolayca ulaşabilirsiniz.',
              },
              {
                icon: '/assets/img/ico_kolaylik.png',
                title: 'Kolaylık',
                description: 'Mutabakatlarla ilgili uyuşmazlıkları sistem üzerinden çözmenin, tamamlanan ve onaylanan mutabakatları portaldan kontrol etmenin rahatlığını yaşayabilirsiniz.',
              },
              {
                icon: '/assets/img/ico_karsilastirma.png',
                title: 'Ekstre Karşılaştırma',
                description: 'Ekstreleri çok kısa sürede karşılaştırarak mutabakat farklarını kolayca tespit edebilirsiniz.',
              },
              {
                icon: '/assets/img/ico_hatirlatma.png',
                title: 'Hatırlatma',
                description: 'Cevap vermeyen firmalara otomatik olarak tekrar e-posta gönderilmesini sağlayabilirsiniz.',
              },
              {
                icon: '/assets/img/ico_kisisel.png',
                title: 'Kişiselleştirme',
                description: 'Göndereceğiniz mutabakatlarda mail şablonunuzu, firmanızın logosu ve belirleyeceğiniz ortak mail formatını kullanarak kişiselleştirebilirsiniz.',
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
            title: 'e-Mutabakat’ın Avantajları',
            description: 'Mutabakat süreçlerinizi dijitalleştirerek zamandan tasarruf sağlamaya ve yüksek oranda geri dönüşler almaya hemen başlayın.',
            items: [
              {
                icon: '/assets/img/ico_hiz.png',
                title: 'Hız',
                description: 'Telefon, posta, faks trafiğine son verin, mutabakat süreçlerinizi hızlandırabilirsiniz.',
              },
              {
                icon: '/assets/img/ico_kontrol.png',
                title: 'Anlık Kontrol',
                description: 'Detaylı raporlama ile giden mutabakat mektuplarınızın karşı tarafa ulaşıp ulaşmadığı bilgisine kolayca ulaşabilirsiniz.',
              },
              {
                icon: '/assets/img/ico_kolaylik.png',
                title: 'Kolaylık',
                description: 'Mutabakatlarla ilgili uyuşmazlıkları sistem üzerinden çözmenin, tamamlanan ve onaylanan mutabakatları portaldan kontrol etmenin rahatlığını yaşayabilirsiniz.',
              },
              {
                icon: '/assets/img/ico_karsilastirma.png',
                title: 'Ekstre Karşılaştırma',
                description: 'Ekstreleri çok kısa sürede karşılaştırarak mutabakat farklarını kolayca tespit edebilirsiniz.',
              },
              {
                icon: '/assets/img/ico_hatirlatma.png',
                title: 'Hatırlatma',
                description: 'Cevap vermeyen firmalara otomatik olarak tekrar e-posta gönderilmesini sağlayabilirsiniz.',
              },
              {
                icon: '/assets/img/ico_kisisel.png',
                title: 'Kişiselleştirme',
                description: 'Göndereceğiniz mutabakatlarda mail şablonunuzu, firmanızın logosu ve belirleyeceğiniz ortak mail formatını kullanarak kişiselleştirebilirsiniz.',
              },
            ],
          },
        },
      ],
      packages: {
        title: 'Uygun Fiyat',
        motto: 'eLogo e-Mutabakat kullanmak için modül ücreti ve aylık ya da yıllık aidat ücreti ödemeniz gerekmiyor.',
        information: 'Sadece 1 kontöre e-Mutabakatlarınızı oluşturabilir ve e-mail, SMS, faks alternatiflerinden herhangi birini seçerek gönderebilirsiniz.',
        cta_text: 'Size özel avantajlı kontör paketlerine <a href="https://portal.logo.com.tr/" target="_blank" class="inline">sipariş portalı</a> adresinden ulaşabilirsiniz.',
      },
      kpi: [
        {
          data: '5000+',
          name: 'kayıtlı firma',
        },
        {
          data: '700.000+',
          name: 'mutabakat gönderimi',
        },
        {
          data: '₺ 6.000.000+',
          name: 'mutabakat tutarı',
        },
        {
          data: '%70',
          name: 'cevaplama oranı',
        },
      ],
      references: [
        {
          id: 'b6867510-55aa-4b01-aeff-9ba9af9f7500',
          name: 'DRD Araç Kiralama',
          link: '',
          image: '/assets/img/ref-1.png',
          productId: '1',
        },
        {
          id: 'b6867510-55aa-4b01-aeff-9ba9af9f7502',
          name: 'modanisa.com',
          link: '',
          image: '/assets/img/ref-2.png',
          productId: '2',
        },
        {
          id: 'b6867510-55aa-4b01-aeff-9ba9af9f7503',
          name: 'Hedef Filo Kiralama',
          link: '',
          image: '/assets/img/ref-3.png',
          productId: '3',
        },
        {
          id: 'b6867510-55aa-4b01-azra-9ba9af9f7503',
          name: 'Çetin Civata',
          link: '',
          image: '/assets/img/ref-4.png',
          productId: '4',
        },
      ],
      faqs: [
        {
          id: 'b6867510-55aa-4b01-faqq-000000000001',
          title: 'eLogo e-Mutabakat ile hangi mutabakatlarımı yapabilirim?',
          description: 'Beyanname Alış (BA),Beyanname Satış (BS) ve Cari Bakiye mutabakatlarınızı eLogo e-Mutabakat sistemi üzerinden yapılabilirsiniz. Ayrıca mutabık kalınmadığı durumlarda, karşılıklı gönderilen ekstre hesaplarınızı sistem üzerinde karşılaştırılarak farkları tespit edebilirsiniz.',
          isOpen: true,
        },
        {
          id: 'b6867510-55aa-4b01-faqq-000000000002',
          title: 'eLogo e-Mutabakat uygulamasını ücretsiz deneyebilir miyim?',
          description: 'eLogo e-Mutabakat uygulamasını herhangi bir sınırlama olmadan 60 gün süre ile ücretsiz üye olarak kullanmaya başlayabilirsiniz. Ücretsiz kullanmaya başlamak için ana sayfada yer alan Ücretsiz Dene butonuna tıklayıp üyelik bilgilerinizi girmeniz ve sonrasında e-mail adresinize gelecek doğrulama linkiyle üyeliğinizi aktifleştirebilirsiniz. Üstelik deneme süreniz sona erse bile arşivlenmiş dosyalarınıza her zaman uygulama içinden erişebilirsiniz.',
          isOpen: false,
        },
        {
          id: 'b6867510-55aa-4b01-faqq-000000000003',
          title: 'Ücretsiz deneme sürem tamamlandığında uygulamayı nasıl kullanmaya devam edebilirim?',
          description: 'Deneme süreniz sona erdikten sonra https://portal.logo.com.tr/ adresinden kontör paketi satın alarak veya mevcut kontör paketinizi kullanarak herhangi bir üyelik adımına gerek kalmadan e-mutabakat uygulamasını kullanmaya devam edebilirsiniz. Mevcut ücretsiz üyelik için oluşturduğunuz mail adresiyle kullanıma devam edebilmeniz için sağ üstteki Giriş Yap butonuna tıklamanız yeterlidir. ',
          isOpen: false,
        },
        {
          id: 'b6867510-55aa-4b01-faqq-000000000004',
          title: 'eLogo e-Mutabakat uygulamasında yaptığım işlemler için nasıl ücretlendiriliyorum?',
          description: 'Logo e-Mutabakat kullanmak için modül ücreti ve aylık ya da yıllık aidat ücreti ödemeniz gerekmiyor. https://portal.logo.com.tr/ adresinden satın aldığınız kontör paketi sonrası işlem başına 1 kontöre e-Mutabakatlarınızı oluşturabilir ve e-mail, SMS, faks alternatiflerinden herhangi birini seçerek gönderebilirsiniz.',
          isOpen: false,
        },
        {
          id: 'b6867510-55aa-4b01-faqq-000000000005',
          title: 'eLogo e-Mutabakat uygulamasında hatırlatma özelliğini kullanırken ücretlendiriliyor muyum?',
          description: 'İşlem başına hatırlatıcı gönderimi yaptığınızda ilk iki işleminizi ücretsiz olarak yapabilmektesiniz. İlk iki işleminiz sonrası hatırlatma gönderimleriniz işlem başına 1 kontör üzerinden ücretlendirilmektedir.',
          isOpen: false,
        },
        {
          id: 'b6867510-55aa-4b01-faqq-000000000006',
          title: 'eLogo e-Mutabakat kullanmak için Logo ERP çözümlerinden birine sahip olmam gerekir mi?',
          description: 'Hayır gerekmiyor. eLogo e-Mutabakat uygulası Logo ERP çözümlerinden bağımsız olarak çalışabilmektedir. Bu yüzden Logo ERP kullanıcısı olmadan da eLogo e-Mutabakat uygulamasını kullanabilirsiniz.',
          isOpen: false,
        },
        {
          id: 'b6867510-55aa-4b01-faqq-000000000007',
          title: 'Mutabakat yapacağım firmaların da eLogo e-Mutabakat kullanıcısı olması zorunlu mudur?',
          description: 'Mutabakat yapacağınız firmanın e-Mutabakat kullanıcısı olması gerekmiyor. Mutabakat mektubu, gönderim yaptığınız firmadaki yetkilinin email adresine gidiyor ve yetkili kişi email üzerindeki linke tıklayarak mutabakat isteğinize cevap verebiliyor.',
          isOpen: false,
        },
        {
          id: 'b6867510-55aa-4b01-faqq-000000000008',
          title: 'Mutabakat yapacağım firmaların bir ücret ödemesi gerekiyor mu?',
          description: 'Hayır gerekmiyor. Müşterileriniz ve tedarikçileriniz mutabakat yanıtlarını size ücretsiz olarak göndermektedir.',
          isOpen: false,
        },
        {
          id: 'b6867510-55aa-4b01-faqq-000000000009',
          title: 'eLogo e-Mutabakat çözümü ERP sistemleri ile entegre midir?',
          description: 'eLogo e-Mutabakat çözümü Logo ERP aileleri ile entegredir. Direkt Logo ERP üzerinden mutabakat gönderiminizi yapabilir , cevaplarınızı Logo ERP üzerinden izleyebilirsiniz. Ayrıca Logo ERP dışında farklı ERP çözümleri ve uygulamalarına altyapı yetkinliklerine göre entegre olunabilmektedir.',
          isOpen: false,
        },
        {
          id: 'b6867510-55aa-4b01-faqq-000000000010',
          title: 'Gönderdiğim mutabakatların karşı tarafa ulaşıp ulaşmadığını nasıl anlarım?',
          description: 'Ekran üzerinde, her mutabakat satırının detayında, gönderdiğiniz mailin karşı tarafa ulaşıp ulaşmadığı, ulaşmadı ise hatanın sebebini detaylı olarak görüntüleyebilirsiniz.',
          isOpen: false,
        },
        {
          id: 'b6867510-55aa-4b01-faqq-000000000011',
          title: 'Göndereceğim mutabakatları uygulama içinde nasıl kişiselleştirebiliyorum?',
          description: 'eLogo e mutabakat uygulaması içinde menü sekmesinde yer alan sistem altında e-mail ve SMS şablonları seçeneğine tıklayıp , açılan ekranda sol üstte yeni sekmesine tıkladığınızda yönlendirildiğiniz ekran üzerinde detaylı olarak firmanıza özel mail şablonlarını oluşturabilirsiniz. Detaylı video anlatımı için <a href="https://www.youtube.com/watch?v=SCq0tP6SYus" target="_blank">https://www.youtube.com/watch?v=SCq0tP6SYus</a> adresini ziyaret edebilirsiniz.',
          isOpen: false,
        },
        {
          id: 'b6867510-55aa-4b01-faqq-000000000012',
          title: 'eLogo e-mutabakat uygulamasını nasıl kullanabileceğime dair eğitimler düzenliyor musunuz?',
          description: 'Eğitim kapsamında belli aralıklarla webinarlar organize edilerek kullanıcı deneyimi ekran akışları üzerinden sunuluyor. Örnek webinar eğitimi için <a href="https://www.youtube.com/watch?v=MeuGCd4Qngo" target="_blank">https://www.youtube.com/watch?v=MeuGCd4Qngo</a> adresini ziyaret edebilirsiniz.',
          isOpen: false,
        },
        {
          id: 'b6867510-55aa-4b01-faqq-000000000013',
          title: 'eLogo e-mutabakat uygulamasında bazı durumlarda hata alabiliyorum, ne yapmalıyım?',
          description: 'Hata alınan durumlarda detaylı video anlatımı için <a href="https://www.youtube.com/watch?v=qiwlDIaiv28" target="_blank">https://www.youtube.com/watch?v=qiwlDIaiv28</a> adresini ziyaret edebilirsiniz. Ayrıca tüm sorularınız için destek@elogo.com.tr adresine mail atabilirsiniz.',
          isOpen: false,
        },
        {
          id: 'b6867510-55aa-4b01-faqq-000000000014',
          title: 'eLogo e-Mutabakat uygulaması için şifremi unuttuğumda ne yapmalıyım?',
          description: 'Uygulamaya bağlı üyelik oluşturduğunuz mail adresinize ait şifrenizi unutursanız , ana sayfa sağ üstte yer alan Giriş Yap butonuna tıklamanız sonrası açılan yeni pencerede şifremi unuttum seçeneğine tıklayabilirsiniz. Yönlendirileceğiniz yeni pencerede şifrenizi sıfırlamak için mail adresinizi girmeniz yeterlidir. Mail adresinize gönderilen şifre sıfırlama adımlarını uygulayarak yeni şifrenizi belirleyebilirsiniz.',
          isOpen: false,
        },
        {
          id: 'b6867510-55aa-4b01-faqq-000000000015',
          title: 'eLogo e-Mutabakat uygulamasında ile gönderilen mutabakat mektuplarımın resmiyeti var mıdır?',
          description: 'eLogo e-Mutabakat sistemi üzerinden e-Mail, SMS ve Faks gönderilerinin kanuni yönden bir geçerliliği yoktur. Gönderilerin ve gelecek cevapların kanuni bir değeri olması için, Mutabakat gönderiminin şirketinizin KEP adresinden, karşı firmanın KEP adresine yapılması ve cevabın karşı firmanın KEP adresinden gelmesi gerekmektedir. eLogo e-Mutabakat sisteminin KEP adresleri üzerinden gönderim yapılabilmesi için geliştirmemiz devam etmektedir.',
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
        logos: {
          show: false,
          contents: [
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
        },
        sitemap: [
          {
            title: 'Linkler',
            links: [
              {
                name: 'Sipariş Portalı',
                url: 'https://portal.logo.com.tr/',
              },
              {
                name: 'Eğitim Videoları',
                url: '',
              },
              {
                name: 'Kullanıcı Dokümanları',
                url: '',
              },
            ],
          },
          {
            title: 'Hakkımızda',
            links: [
              {
                name: 'Logo Yazılım Hakkında',
                url: 'https://www.logo.com.tr/logo-kurumsal',
              },
              {
                name: 'Blog',
                url: 'https://blog.logo.com.tr/',
              },
              {
                name: 'İletişim ve Destek',
                url: 'mailto:destek@elogo.com.tr',
              },
            ],
          },
          {
            title: 'Bizi Takip Edin',
            links: [
              {
                name: 'Twitter',
                image: '/assets/img/footer-ico-twitter.png',
                url: 'https://twitter.com/logo_emutabakat',
              },
              {
                name: 'Facebook',
                image: '/assets/img/footer-ico-fb.png',
                url: 'https://www.facebook.com/Logo-E-Mutabakat-790162314457529/',
              },
              {
                name: 'Instagram',
                image: '/assets/img/footer-ico-ig.png',
                url: 'https://www.instagram.com/logo_emutabakat/',
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
        copyright: 'Copyright 2021 Logo e-Business',
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

  private setScreens(data) {
    this.appScreens = [];
    data.forEach((val) => {
      this.appScreens.push(val.image);
    });
    this.getImageContent(0);
  }
}
