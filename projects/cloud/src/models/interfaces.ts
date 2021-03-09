/**
 * Bütün response'lar HTTP Response tipinde dönüş yapacak
 */
export interface HttpResponse<T> {
  /**
   * Kaçıncı sayfadaki data
   */
  page?: number;
  /**
   * kaç adet count dönüldüğü
   */
  count?: number;
  /**
   * Toplam kaç adet data olduğu
   */
  total?: number;
  /**
   * Dönecek data
   */
  data: T;
}

/**
 * GET  (/api/product/segment/list): Segment[]
 * GET  (/api/product/sector/list): Sector[]
 * GET  (/api/product/finder/step/list): Step[]
 * POST (/api/product/finder/question/list - segmentId): ProductQuestion[]
 * POST (/api/product/finder/expectation/list - segmentId, solutionId): ProductExpectation[]
 * POST (/api/product/reference/list - {filter: {productId: string}}) - Reference[]
 * POST (/api/product/sticker/detail - {filter: {productId: string}}) - ProductSticker
 * POST (/api/product/seller/detail - {filter: {productId: string}}) - ProductSeller
 * POST (/api/product/summary/list - {filter: {segmentId, solutionId, sectorId, tags}, paging: {count: number, page: number}, order:{sectorId: string, segmentId: string, solutionId: string, price: boolean}}): ProductSummary[]
 * POST (/api/product/detail - {filter: {productId: string}}) - Reference[]
 * GET  (/api/solution/summary/list): SolutionSummary[]
 * POST  (/api/solution/summary/list - {paging: {count: number, page: number}}): SolutionSummary[]
 * POST (/api/solution/detail - {filter: {solutionId: string}}): Solution
 * POST (/api/blog/summary/list - {paging: {count: number, page: number}, order: {date: Date , author: authorId}, filter:{tag: tags[], solutionId: string}} ): BlogSummaryResponse[]
 * POST (/api/blog/detail - {filter: {blogId: string}}): Blog
 * GET  (/api/tag/list): Tag[]
 * POST (/api/faq/list - {filter: {solutionId: string, productId. string}}) - FAQ[]
 * POST (/api/testimonial/list - {filter: {solutionId: string, productId: string}}) - Testimonial[]
 */

/**
 * @QUESTIONS
 *  - 27 Çözümler (Solution) ile imajlar, açıklamalar ve title bilgisine ihtiyaç var (6 adet çözüm için).
 *  - 20 Product Summary listelenirken OnPremise ürünler servis tarafında dönecek mi?
 *  - 26 Star olacak mı ilk MVP'de ve Fiyat bilgilsi Ürün bazında mı, yoksa Product bazında mı olacak?
 *  - 25 Blog sayfası logo.com.tr'deki bilgilerden alınabilir. Eğer öyle olursa bu bilgilerin hepsine erişemiyor durumda oluruz. Bu durumda Date, Author, Solution ve Product bazında bir filtreleme yapamayız (Author, solutionId, )
 *  - 28 Author bilgisi sıkıntılı bu bilgi ile bir yere yönlendirme yapılacak mı? Tıklanabilir birşey mi?
 *  - 33 Tag'ler neler olacak (Blog ile Product tag'leri aynı mı?)
 *  - 22 Ürün listesinde Filtrenin sağdan gelmesi gerekebilir.
 *  - 29 Ürün listesinde Paging olacak mı, bütün ürünler tek seferde mi gösterilsin?
 *  - 32 Ürün listesinde sıralama kriterleri nelerdir
 *  - 30 Bu liste sığmaz ve dolarsa nasıl göstereceğiz, scroll mu yapsın?
 *  - 31 Ürün liste yazdıkça aşağıyı filtreliyor isek neye göre search yapacağız, adı mı fiyat mı? sektör mü? Bizim önerimiz sadece Ad, çünkü yazdıkça autocomplete ile tamamlaması için öneri sunacağız. Ek olarak description da gelebilir. O zaman onun da tasarımı gerekir.
 *  - 24 Blog list sayfasındaki filtreleme Kategorileri neler olabilir?
 *  - 21 Blog list sayfasındaki sıralama kriterleri nelerdir
 *  - 34 Herbir tıklamada o ekrana ait feature set aşağıda listenecek bu nedenle ekranlara özgü feature set'lerin oluşturulması gerekir.
 *  - 17 ürün feature text'i uzun gelirse ... ile mi kısaltalım?
 *  - 35 Bir ürün birden fazla solution ile ilişkilendirilebilir mi? Öyle ise ProductSticker solutionId'sini array olarak tutacağız.
 *  - 36 Ürün detayında yer alan paketlerden Sadece yıllık plan gelirse nasıl ilerleyelim?
 *  @TODO
 *  - Input with filter component'i oluşturulacak (Ürün arama - ürünler otomatik listelenecek)
 *  -
 */

/**
 * Ürün bulucunun her bir adımında ekrana basılacak önyüz bilgilerini ifade eder.
 */
export interface Step {
  /**
   * string içeren id değeri
   * Örnek: 10, R480090
   */
  id: string;
  /**
   * Step 1-2-3-4-n adımı altında gösterilecek olan tek kelimelik açıklamayı ifade eder
   * Örneğin: Segment, İhtiyaç, Sektör, Sonuç
   */
  title: string;
  /**
   * Step içerisinde gösterilecek ana soruyu ifade eder
   * Örneğin: Logo ürünleri ile hangi ihtiyacınıza çözüm bulmak istersiniz?
   */
  question?: string;
  /**
   * Step adımında sorulacak soruyu açıklama yazısıdır
   * Örneğin: Aşağıdaki ihtiyaç listesinden birini seçiniz.
   */
  description?: string;
  /**
   * Step adımında yer alan seçeneklerin çoklu seçim yapılıp yapılamayacağını ifade eder.
   * True ya da false olabilir. Default değeri true'dur. True ise çoklu seçim yapılabilir.
   */
  multiselect?: boolean;
  /**
   * Bütün adımları ile beraber tüm dataları içeren tek bir HTTPResponse
   * oluşturulmak istenirse bu prop kullanılarak tüm alt data dönülecektir.
   */
  selection?: Segment[] | ProductQuestion[] | ProductExpectation[] | ProductSummary[];
}

/**
 * Kurumdaki çalışan sayısına göre ürün satın alacak şirket kırılımını ifade eder.
 */
export interface Segment {
  /**
   * UUID içeren id değeri
   * Örnek: d1fdf61e-0ab5–433d-9b19-de09425b1e46
   */
  id: string;
  /**
   * Gösterilecek olan şirket tipi
   * Örneğin: Mikro Şirket, KOBİ, Büyük Şirket
   */
  title: string;
  /**
   * Gösterilecek şirket tipine ait detay açıklaması
   * Örneğin: Ekibimiz 1-5 kişi arası.
   */
  description: string;
  /**
   * Title'ı ifade etmek amacıyla kullanılacak ikona ait path (blob | string)
   * Örneğin: "http://xyz.com/kobi.svg"
   */
  icon: string;
}

/**
 * Step 2 de listelenecek olan item'ları ifade eder. İhtiyaçları daha iyi anlamak adına
 * kullanıcıya sunulacak seçeneklerden her biri bu bilgi ile oluşturulur.
 */
export interface ProductQuestion {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Gösterilecek text'i ifade eder
   */
  title: string;
  /**
   * İlişkili olduğu Segment'e ait Id'leri döner
   * Örneğin "Bordro süreçlerimi yönetmek istiyorum." sadece "Kobi" ve "Büyük Şirket" segmentine
   * gösterilecekse bu bilgi ile filtrelenebilecektir.
   */
  segmentId: string[];
  /**
   * Gösterilecek sorunun hangi ürün kategorilerine (Solution) ait olduğunu
   * anlamak için kullanılacaktır.
   */
  solutionId: string;
  /**
   * Soruların sağında ya da altında Kategori (Solution) bilgisini göstermek
   * amacı için kullanılacaktır.
   */
  solutionName: string;
}

/**
 * Step 3 de listelenecek olan Item'ları ifade eder.
 */
export interface ProductExpectation {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Eğer sektör adı (sectorName) gönderilmez ise buraya daha evrensel olması adına Title ekledik.
   * Gösterilecek text'i ifade eder
   */
  title?: string;
  /**
   * Item'ın bağlı bulunduğu Sektörleri ifade eder. Bu filtreleme yapabilmek için gerekli bir alandır.
   */
  sectorId: string;
  /**
   * Gösterilecek Item'a ait text'i ifade eder. Eğer bu alan gönderilmez ise bunun yerine `title` alanı kullanılır.
   */
  sectorName: string;
  /**
   * İlişkili olduğu Segment'e ait Id'leri döner
   * Örneğin "Bordro süreçlerimi yönetmek istiyorum." sadece "Kobi" ve "Büyük Şirket" segmentine
   * gösterilecekse bu bilgi ile filtrelenebilecektir.
   */
  segmentId: string[];
  /**
   * Gösterilecek sorunun hangi ürün kategorilerine (Solution) ait olduğunu
   * anlamak için kullanılacaktır.
   */
  solutionId: string[];
}

// Sector
/**
 * Ürünlere ait sektör sınıfını tanımlar.
 * Örneğin: Yiyecek-İçecek Hizmetleri
 */
export interface Sector {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Gösterilecek sektör adı
   */
  name: string;
  /**
   * Sektore ait gösterilecek ikonu ifade eder, bu şart değil şu anki tasarımda
   * Ama logo.com.tr de sektör isimlerinin yanında ikon kullanılmış burada da kullanılmak istenebilir
   */
  icon?: string;
}

// Solution
/**
 * Ürün bağlı bulunduğu kategorinin özetini ifade eder. Tüm data yerine özet data listelenir.
 */
export interface SolutionSummary {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Ekrana basılacak çözüm adı
   */
  name: string;
  /**
   * SEO için adres satırında gösterilecek ürün ismi
   */
  slug: string;
  /**
   * Ekrana basılacak çözüm detayı
   */
  description: string;
  /**
   * Çözümü ifade eden ikon
   */
  icon: string;
}

// @TODO: GET - /assets/data/solution/metadata.json - id'ye göre çek
/**
 * Solution detay sayfasının içeriğini döner.
 * Bu bilgi Servis üzerinden dönerse ileride yönetmek daha kolay olacaktır.
 */
export interface SolutionMetaData {
  /**
   * Meta keywordunu kullandık çünkü Solution bu interface'den extend ettiğinde
   * Meta property ile içerisine entegre olacaktır
   */
  meta: {
    /**
     * GUID içeren id değeri
     * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
     */
    id: string;
    /**
     * Çözüme ait ana bilgi burada verilecek
     */
    cover: {
      /**
       * Cover'ı ifade eden bir title
       */
      title: string;
      /**
       * Buna ait bir açıklama alanı
       */
      description: string;
      /**
       * Cover imajı
       */
      image: string;
    },
    /**
     * Çözüme ait özellikleri ifade eden detaylar buradan çekilecek
     */
    features: {
      /**
       * Gösterilecek başlık
       */
      title: string;
      /**
       * Başlığa ait detaylar
       */
      description: string;
      /**
       * Özelliği ifade eden imaj
       */
      image: string;
    }[]
    summaries: {
      /**
       * Gösterilecek başlık
       */
      title: string;
      /**
       * Buradaki açıklama HTML çıktısı olarak verilmelidir. Çünkü parağraflar olan alanlar var.
       * <p>....</p> <p>....</p> gibi
       */
      description: string;
      /**
       * Özelliği ifade eden imaj
       */
      image: string;
    }[]
  }
}

/**
 * Ürün bağlı bulunduğu kategoriyi ifade eder. Şu ana kadar 6 adet Çözüm (Solution/Category) tanımlanmıştır.
 */
export interface Solution extends SolutionSummary, SolutionMetaData {
  /**
   * Solution sayfasında tanımlı background'a ait imaj adresini döner
   * Örnek: http://www.logo.cloud/assets/product/ik.jpg
   */
  backgroundImage?: string;
}

// FAQ
/**
 * Sıkça sorulanlar solution ve product bazında ayrılmaktadır. Solution ya da Product olarak
 * talep edilmez ise Genel FAQ olarak döndürülür. Yani içerisinde solution ya da product içermez.
 * İletişim sayfasında genel sorular kısmı bu şekilde çözümlenebilir.
 */
export interface FAQ {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Sıkça sorulanların başlığını ifade eder
   */
  title: string;
  /**
   * Sıkça sorulanların detayını ifade eder
   */
  description: string;
  /**
   * Hangi çözüm/kategoriye listesine ait olduğunu anlamak için kullanılır.
   * Filtreleme ve sorgu gönderme amacıyla ihtiyaç vardır.
   */
  solutionId: string[];
  /**
   * Hangi ürünlere ait olduğunu anlamak için kullanılır.
   * Filtreleme ve sorgu gönderme amacıyla ihtiyaç vardır.
   */
  productId: string[];
  /**
   * Item açık olarak görünsün mü? sorusunun cevabıdır. True ise description alanı
   * ekranda açık olarak basılır. Default değeri False'dur.
   */
  isOpen: boolean;
}

// ##############  Product

/**
 * Ürün özet bilgisini tanımlamak amacıyla kullanılır.
 */
export interface ProductSummary {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Logo Workflow tarafında tanımlı jenerik Logo ürün kod bilgisini döner
   */
  materialCode?: string;
  /**
   * Ürün listemesi esnasında arka plan görseli için kullanılacak imaj adresi
   */
  backgroundImage?: string;
  /**
   * Ürüna ait logo imajı
   */
  logo: string;
  /**
   * Ürün adı
   */
  name: string;
  /**
   * SEO için adres satırında gösterilecek ürün ismi
   */
  slug: string;
  /**
   * Ürün açıklaması
   */
  description: string;
  /**
   * Ürünün bağlı bulunduğu solution'a ait id değeri (kategori id'si) ve name değerlerini döner
   */
  solutions: { id: string, name: string }[];
  /**
   * Ürünün cloud ürünü olup olmadığını döner. Default değeri true'dur.
   */
  isCloud: boolean;
  /**
   * Ürün hangi segment ürünüdür bunu döner. Kobi ise ona ait segment id döner.
   */
  segmentId: string[];
  /**
   * Ürün hangi sektörlere ait olduğunu dönen id değerleri dizisi
   */
  sectorId: string[];
  /**
   * Cloud üzerinde bulunan link bilgisini döner. ilerleyen dönemde Cloud ile entegre
   * bir bilgi geldiğinde bunun altında dönülmesi istenecektir o nedenle bir obje olarak ele alındı.
   */
  cloud?: { link: string };
  /**
   * onPremise üzerinde bulunan link bilgisini döner. ilerleyen dönemde onPremise ile entegre
   * bir bilgi geldiğinde bunun altında dönülmesi istenecektir o nedenle bir obje olarak ele alındı.
   */
  onPremise?: { link: string },
  /**
   * Stars bilgisi şimdilik geliyor olursa ekrana basarız ama bence ilk MVP kapsamında
   * bu özelliği düşünmek bizi geriye itebilir
   */
  stars?: number;
  /**
   * Ürüne ait ücret bilgisini döner
   */
  price?: Price;
}

/**
 * Ürün detay bilgisini döner. ProductSummary'i extend eder. O sınıfa ait bilgilerle beraber döner.
 */
export interface Product extends ProductSummary {
  /**
   * page background sayfanın arka planında gösterilecek resmi ifade eder.
   * Eğer yoksa background image propertisi kullanılacaktır.
   */
  pageBackgroundImage?: string;
  /**
   * Deneme sürümü var mı?
   */
  isTrial: boolean;
  /**
   * Satın alınabilir bir ürün müdür?
   */
  isPurchase: boolean;
  /**
   * Ürün hakkında ilk bilginin verildiği tanıtım yazısı
   */
  cover: {
    /**
     * Ürüne ait ana başlık
     * Örneğin: Logo Payroll Online Bordro Programı
     */
    title: string;
    /**
     * Başlık açıklaması
     * Örneğin: Kolay kullanılan, yenilikçi ve mevzuata uygun yeni nesil online bordro programı!
     */
    description: string;
    /**
     * Ürüne ait fotoğrafın yer aldığı imaj path'i
     */
    image: string;
  },
  /**
   * Ürün ekran özelliklerine göre ilgili veri yapısını tanımlar. Detay için ilgili sınıf tanımına bakınız.
   */
  screens: ProductScreenFeatures[];
  /**
   * Ürün fiyatlandırmasında kullanılan paketlere özgü veri yapısını tanımlar. Detay için ilgili sınıf tanımına bakınız.
   */
  packages: Package[];
}

/**
 * Ekranların bilgilerini slider üzerinde göstermek için kullanılır
 * Her bir slider Item'ı ekranın detayı hakkında bilgi verir. Tıklanılan
 * slider item'ına ilişkin ürün özellikleri aşağıda listelinir.
 */
export interface ProductScreenFeatures {
  /**
   * Slider içerisinde gösterilecek olan ekranlara ait imaj pathleri
   */
  image: string[];
  /**
   * Ekranı tanımlayan başlık
   */
  title: string;
  /**
   * Ekrana ait ikon path'i
   */
  icon: string;
  /**
   * Ekran açıklaması
   */
  description: string;
  /**
   * Ekran özelliklerini bu alan içerisinde veriyor olacağız.
   * Ekran'ın her bir özelliğini dizi olarak döner.
   */
  feature: {
    /**
     * Özellik ile ilgili genel başlık
     */
    title: string;
    /**
     * Özellik genel başlığınının açıklaması
     */
    description: string;
    /**
     * Ekranın her bir özelliği
     */
    items: [{
      /**
       * Özellik ikonu
       */
      icon: string,
      /**
       * Özellik başlığı
       */
      title: string,
      /**
       * Özellik açıklaması
       */
      description: string,
    }]
  }
}

/**
 * Sidebar ürünün künyesini göstermek amacıyla kullanılmaktadır. Ürün detaylarına girildiğinde
 * sağ tarafta sabit olarak duran alanda kullanıcak ürün bilgi alanıdır.
 */
export interface ProductSticker {
  /**
   * Ürünün bağlı bulunduğu solution'a ait id değerini (kategori id'si) ve name değerlerini döner
   */
  solution: { id: string, name: string }[];
  /**
   * Ürüne ait ya da Blog'a ait Tag bilgilerini dönen data veri objesi
   */
  tags: Tag[];
  /**
   * Mobile uygulamaların linklerini ve android, ios vs. gibi hangi tip olduğunu dönen data yapısını tarif eder.
   */
  store?: [{ id: string, link: string, type: StoreType }];
  /**
   * Social media linklerine entegre edilecek açıklama metnini burada veriyor olacağız.
   * Örneğin: "Lütfen, arkadaşlarınızla Logo'daki bu gelişme ile paylaşımda bulununuz #link" gibi...
   * Bu bilginin ajans üzerinden düşünülmüş bir içerik ile geliyor olması gerekir.
   */
  social?: string;
  /**
   * Ürüne ait broşür varsa onu download edecekleri URL bilgisi
   * Örneğin:  http://www.isbasi.com.tr/brosur.zip
   */
  brochure?: string;
  /**
   * Ürünün kendi sitesine yönlendireceğimiz bir adres varsa onun bilgisi
   * Örneğin: http://isbasi.com.tr
   */
  url?: string;
  /**
   * Ürüne ait gizlilik kullanım sınırlandırmaları varsa  bunun bilgisi
   * Çıktısı HTML string olacak şekilde dönülmelidir. Paragraflar vs. ler  bu nedenle anlaşılır olur.
   */
  privacy?: string;
}

/**
 * Ürünü satışı ile ilgilenen şirkete ait bilgiler
 * Örneğin İşbaşı
 */
export interface ProductSeller {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Telefon numarası
   */
  phone: string;
  /**
   * Adres bilgisi
   */
  address: string;
  /**
   * Fax bilgisi
   */
  fax: string;
  /**
   * Email bilgisi
   */
  email: string;
  /**
   * Google Maps iframe url
   */
  map: { url: string };
}

/**
 * Mobile store types
 */
export enum StoreType {
  ANDROID = 'android',
  IOS = 'ios',
  HUAWEI = 'huawei',
  MICROSOFT = 'microsoft',
}

/**
 * Product price data type object
 */
export interface Price {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Ürün fiyatı
   */
  cost: number;
  /**
   * Fiyat sembolü
   * ISO 4217 Codes Symbols: ₺, $, € iso standardı
   * https://assemblysys.com/iso-4217-currency-codes/
   */
  symbol: string;
  /**
   * Fiyata verginin dahil olup olmadığını belirtir. Default değeri false, yani( + KDV)
   */
  includeTax?: boolean; // false
  /**
   * ISO 4217 Codes Symbols: EUR, TRY, USD
   */
  currency?: string;
  /**
   * Promosyon fiyatı
   */
  promo?: number;
  /**
   * İndirim yüzdesi
   */
  discount?: number;
}

/**
 * @TODO Rename PackageProperties
 * Ürün paketinde yeralan herbir özellik
 */
export interface PackageProperty {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Ekranda gösterilecek özelliğe ait text
   */
  title: string;
  /**
   * Özelliğin yeni olup olmadığı
   */
  isNew: boolean;
}

/**
 * Ürün paketine ait interface, Paket özelliklerini ve detaylarını içerir
 */
export interface Package {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Paketi açıklayan text
   */
  title: string;
  /**
   * Pakete ait ikon
   */
  icon: string;
  /**
   * Paket fiyatı
   */
  price: Price;
  /**
   * Pakete ait özelliklerin detaylarını gösteren dizi
   */
  properties?: PackageProperty[];
  /**
   * Paketin aylık mı, yıllık mı olduğunu belirten property
   */
  type: PackageType;
}

/**
 * Paketin aylık mı, yıllık mı olduğunu belirten property
 */
export enum PackageType {
  DAILY,
  MONTHLY,
  YEARLY,
}

/**
 * Ürünü kullanan firmalara ait referans bilgileri
 */
export interface Reference {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Referansın hangi firmaya ait olduğunu gösteren isim
   */
  name: string;
  /**
   * Referansa ait link değeri
   */
  link: string;
  /**
   * Referansa ait logo vs. belirten bir imaj
   */
  image: string;
  /**
   * Bu referansın hangi ürünle ilişkili olduğunu belirten Id değeri
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  productId: string;
}

/**
 * Ürüne ait ya da Blog'a ait Tag bilgilerini dönen data veri objesi
 */
export interface Tag {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Ekrana basılacak tag adı
   */
  name: string;
}

/**
 * Blog summary blog'un bir kısmını göstermek için kullanılır.
 * Yani ürün hakkında çok kısa bilgiyi kart içerisinde verir.
 */
export interface BlogSummary {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Blog'a ait imaj görseli
   */
  image: string;
  /**
   * Bloga ait tag'ları listeler
   */
  tags: Tag[];
  /**
   * Blog'a ait başlık
   */
  title: string;
  /**
   * Blog'a ait kısa açıklama
   */
  description: string;
  /**
   * Blog'un yayın tarihi
   */
  date: { publish: string };
  /**
   * Blog'un yazarı
   */
  author: Author;
  /**
   * Blogu okunma adedi
   */
  readCount: number;
}

/**
 * Blog'un detaylı datasını dönen interface BlogSummary'den extend edilir
 */
export interface Blog extends BlogSummary {
  /**
   * Blog içerisinde yer alacak HTML bilgisi
   * Image vs. url olarak eklenmiş olarak gelmelidir
   */
  html: string;
  /**
   * Bloga ait diğer tag'ları listeler
   */
  otherTags: Tag[];
  similar: BlogSummary[];
}

// Author
/**
 * Blog yazısını hazırlayan yazara ait bilgi
 */
export interface Author {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Yazar adı
   */
  name: string;
  /**
   * Yazar soyadı
   */
  surname: string;
  /**
   * Mesajı bırakan kişinin fotosu
   */
  image?: string;
  /**
   * Yazarın çalıştığı şirket
   */
  companyName?: string;
  /**
   * Yazarın çalıştığı şirketteki rolü
   */
  title?: string;
}

// TESTIMONIAL
/**
 * Kullanıcı görüşlerine ait data yapısı
 */
export class Testimonial {
  /**
   * GUID içeren id değeri
   * Örnek: b6867510-55aa-4b01-aeff-9ba9af9f7500
   */
  id: string;
  /**
   * Yazıyı hazırlayan yazara ait bilgi
   */
  author: Author;
  /**
   * Kaç puan verildiğini gösteren değer
   */
  star: number;
  /**
   * Mesaj başlığı
   */
  title: string;
  /**
   * Mesaj detayı
   */
  description: string;
  /**
   * Bu açıklama çözümlerle alakalı olduğu id'ler
   */
  solutionId: string[];
  /**
   * Bu açıklamanın ürünlerle alakalı olduğu id'ler
   */
  productId: string[];
}

// Data Samples
/*
* const solutions: SolutionSummary[] = [
  {
    id: '1',
    name: 'Muhasebe Yönetimi',
    description: 'İster Webden İster Cepten; İnternet Erişiminizin Olduğu Her Yerden İşletmenizin Ön Muhasebe İşlemlerini...',
    icon: '',
  },
  {
    id: '2',
    name: 'Bordro ve İnsan Kaynakları Yönetimi',
    description: 'Hızlı, güvenli, güncel mevzuata uyumlu yeni nesil bordro ve insan kaynakları çözümlerine ulaşın.',
    icon: '',
  },
  {
    id: '3',
    name: 'Doküman Yönetimi',
    description: 'Kurumunuzdaki tüm dokümanları buluta taşıyın, Logo Doküman Yönetimi Servisi sayesinde güvenle kullanın ve saklayın.',
    icon: '',
  },
  {id: '4', name: 'Parakende Yönetimi', description: '', icon: ''},
  {id: '6', name: 'İş Sağlığı ve Güvenliği Yönetimi', description: '', icon: ''},
  {id: '5', name: 'E-Çözümler', description: '', icon: ''},
];*/
const response: Step[] = [
  // STEP 1 GET (/api/productFinder/segmentList)
  {
    id: '1',
    title: 'Segment',
    question: 'Şirketinizin yazılım seviyesini nasıl tanımlarsınız?',
    description: 'İhtiyaçlarınızı daha iyi anlamak için şirketinizdeki kurumsal yazılım kullanımı tecrübesini belirtmelisiniz.',
    selection: [
      {
        id: '1',
        title: 'Mikro Şirket',
        description: 'Ekibimiz 1-5 kişi arası.',
        icon: 'icon_path',
      },
      {
        id: '2',
        title: 'KOBİ',
        description: 'Ekibimiz 5-50 kişi arası.',
        icon: 'icon_path',
      },
      {
        id: '2',
        title: 'Büyük Şirket',
        description: 'Ekibimiz 50 kişiden fazla.',
        icon: 'icon_path',
      },
    ],
  },
  // STEP 2 POST (/api/productFinder/questions - segmentId)
  {
    id: '2',
    title: 'İhtiyaç',
    question: 'Logo Cloud ürünleri ile hangi probleminizi çözmek istediğinizi seçiniz.',
    description: 'Aşağıdaki ihtiyaç listesinden birini seçiniz.',
    multiselect: true,
    selection: [
      {
        id: '1',
        title: 'Bordro süreçlerimi yönetmek istiyorum.',
        segmentId: ['2'],
        solutionId: '2',
        solutionName: 'HR',
      },
      {
        id: '2',
        title: 'İnsan kaynakları süreçlerimi yönetmek istiyorum.',
        segmentId: ['3'],
        solutionId: '2',
        solutionName: 'HR',
      },
      {
        id: '3',
        title: 'Ön muhabe işlemlerimi tamamlamak istiyorum.',
        segmentId: ['2'],
        solutionId: '2',
        solutionName: 'HR',
      },
      {
        id: '4',
        title: 'Şirket dokümanlarımı dijital ortamda arşivlemek ve yönetmek istiyorum.',
        segmentId: ['1'],
        solutionId: '2',
        solutionName: 'HR',
      },
      {
        id: '5',
        title: 'Cari hesap takibi yapmak istiyorum.',
        segmentId: ['3'],
        solutionId: '2',
        solutionName: 'HR',
      },
    ],
  },
  // STEP 3 POST (/api/productFinder/expectation - segmentId, solutionId)
  {
    id: '1',
    title: 'Sektör',
    question: 'Aşağıdaki sektörlerden hangisinde faaliyet gösteriyorsunuz?',
    description: 'Aşağıda listelenen sektörlerden birrini seçiniz.',
    selection: [
      {
        id: '1',
        sectorId: '45',
        sectorName: 'Yiyecek- İçecek hizmetleri',
        segmentId: ['2', '3'],
        solutionId: ['2', '5'],
      },
      {
        id: '2',
        sectorId: '46',
        sectorName: 'Turizm, eğlence, konaklama',
        segmentId: ['3'],
        solutionId: ['2'],
      },
      {
        id: '3',
        sectorId: '47',
        sectorName: 'Tekstil, hazır giyim ve deri üretimi',
        segmentId: ['3'],
        solutionId: ['2'],
      },
      {
        id: '4',
        sectorId: '48',
        sectorName: 'Tarım ürünleri, hayvancılık',
        segmentId: ['3'],
        solutionId: ['2'],
      },
      {
        id: '5',
        sectorId: '49',
        sectorName: 'Tarım ürünleri, hayvancılık',
        segmentId: ['3'],
        solutionId: ['2'],
      },
    ],

  },
  // STEP 4 POST(segmentId, solutionId, sectorId)
  {
    id: '4',
    title: 'Sonuç',
    selection: [
      {
        id: '1',
        backgroundImage: 'background-logo-payrol.jpg',
        logo: 'logo-payrol.png',
        name: 'Bordro Yönetimi',
        slug: 'bordro-yonetimi',
        description: 'İK süreçleriniz dönüşüyor, verileriniz Logo güvencesi ile buluta taşınıyor!',
        solutions: [{id: '3', name: 'Bordro ve İnsan Kaynakları Yönetimi'}],
        isCloud: false,
        sectorId: ['1', '2', '3'],
        segmentId: ['1', '2', '3'],
        onPremise: {link: 'http://wwww.logo.com.tr/bordro-yonetimi'},
      },
      {
        id: '2',
        backgroundImage: 'background-logo-isbasi.jpg',
        logo: 'logo-isbasi.png',
        name: 'Ön Muhasebe Yönetimi',
        slug: 'on-muhasebe-yonetimi',
        description: 'İster e-Fatura İster Ön Muhasebe İhtiyacınıza en uygun çözümler Logo İşbaşı’nda!',
        solutions: [{id: '2', name: 'Muhasebe Yönetimi'}],
        isCloud: true,
        sectorId: ['1', '2', '3'],
        segmentId: ['1', '2', '3'],
        cloud: {link: 'http://logo.cloud/product/bordro-yonetimi'},
        price: {id: '1', cost: 40, symbol: '₺'},
      },
      {
        id: '3',
        backgroundImage: 'background-logo-dys.jpg',
        logo: 'logo-dys.png',
        name: 'Doküman Yönetimi',
        slug: 'dokuman-yonetimi',
        description: 'İK süreçleriniz dönüşüyor, verileriniz Logo güvencesi ile buluta taşınıyor!',
        solutions: [{id: '3', name: 'Dokuman Yönetimi'}],
        isCloud: true,
        segmentId: ['1', '2', '3'],
        sectorId: ['1', '2', '3'],
        cloud: {link: 'http://logo.cloud/product/dokuman-yonetimi'},
        stars: 5,
        price: {id: '2', cost: 30, symbol: '₺', includeTax: false},
      },
    ],
  },
];
const interFaceTypeDeclarationSampleForTalhaSALT: ({ [abc in keyof Step]: Step[abc] } | { 'id': number, 'extra': boolean } | { [abc in keyof Tag]: Tag[abc] }) [] = [{
  id: 'true', // number da alabilir
  title: 'asdad',
  question: 'asdasd',
  description: 'asdsad',
  extra: true,
}];

const authors: Author[] = [
  {
    id: '1',
    name: 'Talha',
    surname: 'Salt',
    companyName: 'Logo',
    title: 'Baslik',
  },
  {
    id: '2',
    name: 'Serkan',
    surname: 'Konakçı',
    companyName: 'Logo',
    title: 'Baslik',
  },
  {
    id: '3',
    name: 'Serhan',
    surname: 'Gürbüz',
    companyName: 'Logo',
    title: 'Baslik',
  },
];

const tags: Tag[] = [
  {
    id: '1',
    name: 'Label 1',
  },
  {
    id: '2',
    name: 'Label 2',
  },
];

const prices: Price[] = [
  {
    id: '1',
    cost: 50,
    symbol: '₺', // ₺, $, € iso standartı
    includeTax: false, // false
    currency: 'TRY', // EUR, TRY, USD iso standardı
    promo: 5,
    discount: 5,
  },
  {
    id: '2',
    cost: 100,
    symbol: '₺', // ₺, $, € iso standartı
    includeTax: false, // false
    currency: 'TRY', // EUR, TRY, USD iso standardı
    promo: 5,
    discount: 5,
  },
  {
    id: '3',
    cost: 150,
    symbol: '₺', // ₺, $, € iso standartı
    includeTax: false, // false
    currency: 'TRY', // EUR, TRY, USD iso standardı
    promo: 5,
    discount: 5,
  },
];

const blogSummaries: BlogSummary[] = [
  {
    id: '1',
    image: 'string',
    tags: [
      {
        id: '1',
        name: 'Label 1',
      },
      {
        id: '2',
        name: 'Label 2',
      },
    ],
    title: 'Yıllık izin nedir, nasıl elde edilir?',
    description: 'Yıllık izin, işçinin en temel haklarındadır. İşçi, gerekli koşulları sağladığı' +
      ' hallerde bu hakkını kullanmakla; işveren ise buna izin vermekle yükümlüdür. Ancak, her işçi' +
      ' için yıllık izin süreleri aynı olmaz. ',
    date: {publish: '16 Nisan 2020'},
    author: {
      id: '1',
      name: 'Talha',
      surname: 'Salt',
      companyName: 'Logo',
      title: 'Baslik',
    },
    readCount: 5,
  },
  {
    id: '2',
    image: 'string',
    tags: [
      {
        id: '3',
        name: 'Label 3',
      },
      {
        id: '4',
        name: 'Label 4',
      },
    ],
    title: 'Yıllık izin nedir, nasıl elde edilir?',
    description: 'Yıllık izin, işçinin en temel haklarındadır. İşçi, gerekli koşulları sağladığı' +
      ' hallerde bu hakkını kullanmakla; işveren ise buna izin vermekle yükümlüdür. Ancak, her işçi' +
      ' için yıllık izin süreleri aynı olmaz. ',
    date: {publish: '16 Nisan 2020'},
    author: {
      id: '2',
      name: 'Serkan',
      surname: 'Konakçı',
      companyName: 'Logo',
      title: 'Baslik',
    },
    readCount: 5,
  },
  {
    id: '3',
    image: 'string',
    tags: [
      {
        id: '4',
        name: 'Label 4',
      },
      {
        id: '5',
        name: 'Label 5',
      },
    ],
    title: 'Yıllık izin nedir, nasıl elde edilir?',
    description: 'Yıllık izin, işçinin en temel haklarındadır. İşçi, gerekli koşulları sağladığı hallerde bu hakkını kullanmakla; işveren ise buna izin vermekle yükümlüdür. Ancak, her işçi için yıllık izin süreleri aynı olmaz. ',
    date: {publish: '16 Nisan 2020'},
    author: {
      id: '3',
      name: 'Serhan',
      surname: 'Gürbüz',
      companyName: 'Logo',
      title: 'Baslik',
    },
    readCount: 5,
  },
];

const blogs: Blog[] = [
  {
    ...blogSummaries[0],
    html: '<h1>Logo bordro ve insan kaynakları yönetimi çözümleri</h1> <p>Blog content</p>',
    tags: [
      {
        id: '1',
        name: 'Label 1',
      },
      {
        id: '2',
        name: 'Label 2',
      },
    ],
    otherTags: [
      {
        id: '1',
        name: 'Label 1',
      },
      {
        id: '2',
        name: 'Label 2',
      },
    ],
    similar: blogSummaries,
  },
];

const solutionSummaries: SolutionSummary[] = [
  {
    id: '1',
    name: 'Bordro ve İnsan Kaynakları Yönetimi',
    slug: '',
    description: 'İşletmeniz için en doğru kararları Logo bordro ve insan kaynakları çözümleriyle alın!',
    icon: 'https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png',
  },
  {
    id: '2',
    name: 'Muhasebe Yönetimi',
    slug: '',
    description: 'Müthiş muhasebe yönetimleri ile işletmenize güç katın!',
    icon: 'https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png',
  },
  {
    id: '3',
    name: 'Doküman Yönetimi',
    slug: '',
    description: 'Müthiş döküman yönetimleri ile işletmenize güç katın!',
    icon: 'https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png',
  },
  {
    id: '4',
    name: 'Perakende Yönetimi',
    slug: '',
    description: 'Müthiş perakende yönetimleri ile işletmenize güç katın!',
    icon: 'https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png',
  },
  {
    id: '5',
    slug: '',
    name: 'İş Sağlığı ve Güvenliği Yönetimi',
    description: 'İş Sağlığı ve Güvenliği Yönetimleri ile işletmenize iş kazalarınıza kesin çözüm üretin!',
    icon: 'https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png',
  },
  {
    id: '6',
    name: 'E-Çözümler',
    slug: '',
    description: 'E-Çözümler ile işletmenizi akıllı hale getirin!',
    icon: 'https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png',
  },
];

const solutionMetaData: SolutionMetaData[] = [
  {
    meta: {
      id: '1',
      cover: {
        title: 'Cover Title',
        description: 'Cover String',
        image: 'https://via.placeholder.com/1920x257.png?text=Cover+Image',
      },
      features: [
        {
          title: 'Modüler Yapı',
          description: 'Modüler yapısıyla ihtiyaca göre şekillendirilebilen Logo Bordro ve İnsan Kaynakları' +
            ' Yönetimi çözümleri, yerleşik ya da web tabanlı kullanım sayesinde de insan kaynağını daha hızlı ve' +
            ' esnek bir şekilde yönetmeye olanak tanıyor. ',
          image: 'https://via.placeholder.com/100x100.png?text=Icon',
        },
        {
          title: 'Neden Önemli?',
          description: 'İşe alımdan bordrolamaya, eğitimlerden performans değerlendirmelerine dek tüm İK süreçlerini' +
            ' dijitalleştirmek, insan kaynağının daha verimli yönetilmesini sağlamanın yanı sıra çalışan memnuniyetini,' +
            ' dolayısıyla da işletmenin genel performansını artırır.',
          image: 'https://via.placeholder.com/100x100.png?text=Icon',
        },
        {
          title: 'Kimler kullanabilir?',
          description: 'Mikro işletmelerden büyük ölçekli işletmelere kadar her ölçekten firma Logo bordro ve insan' +
            ' kaynakları çözümlerinden yararlanabilir. Ayrıca, insan kaynakları firmaları da karmaşık bordro ve İK' +
            ' ihtiyaçlarının tek elden yönetimi için Logo’dan yararlanabilir.',
          image: 'https://via.placeholder.com/100x100.png?text=Icon',
        },
        {
          title: 'Nasıl Seçilmeli?',
          description: 'Bir bordro yazılımı veya insan Kaynakları Yönetimi çözümü seçerken, işletmedeki farklı' +
            ' teknolojik çözümlerle entegre çalışabilen, mevcut ihtiyaçları karşılamanın yanı sıra, gelecekte' +
            ' oluşabilecek ihtiyaçları da karşılayabilecek esneklikte bir yapının tercih edilmesi önemlidir. ',
          image: 'https://via.placeholder.com/100x100.png?text=Icon',
        },
      ],
      summaries: [
        {
          title: 'Bordro Yönetimi',
          description: 'İK süreçlerinin yönetiminde uzun yıllara dayalı deneyiminden yararlanan Logo, emek ve zaman-yoğun' +
            ' bir süreç olan bordro işlemlerine özel çözümleriyle fark yaratıyor. Logo\'nun bordro odaklı çözümleri,' +
            ' İK departmanlarının bordro işlemlerini hızlı ve hatasız gerçekleştirmelerine olanak tanıyor.  \n' +
            '\n' +
            'İşlem takibinin kolaylığı sayesinde işletmelerin operasyonel maliyetleri  düşüyor. Bordro çözümleri, Logo' +
            ' imzalı kurumsal kaynak planlama (ERP) çözümleriyle de entegre çalışarak kaynakları uçtan uca yönetme imkanı' +
            ' sunuyor.',
          image: 'string',
        },
        {
          title: 'Bordro Yönetimi',
          description: 'İK süreçlerinin yönetiminde uzun yıllara dayalı deneyiminden yararlanan Logo, emek ve zaman-yoğun' +
            ' bir süreç olan bordro işlemlerine özel çözümleriyle fark yaratıyor. Logo\'nun bordro odaklı çözümleri,' +
            ' İK departmanlarının bordro işlemlerini hızlı ve hatasız gerçekleştirmelerine olanak tanıyor.  \n' +
            '\n' +
            'İşlem takibinin kolaylığı sayesinde işletmelerin operasyonel maliyetleri  düşüyor. Bordro çözümleri, Logo' +
            ' imzalı kurumsal kaynak planlama (ERP) çözümleriyle de entegre çalışarak kaynakları uçtan uca yönetme imkanı' +
            ' sunuyor.',
          image: 'string',
        },
      ],
    },
  },
];

const solutions: Solution[] = [
  {
    backgroundImage: 'https://via.placeholder.com/1920x257.png?text=Background+Image',
    ...solutionMetaData[0],
    ...solutionSummaries[1],
  },
  {
    backgroundImage: 'https://via.placeholder.com/1920x257.png?text=Background+Image',
    ...solutionMetaData[0],
    ...solutionSummaries[2],
  }, {
    backgroundImage: 'https://via.placeholder.com/1920x257.png?text=Background+Image',
    ...solutionMetaData[0],
    ...solutionSummaries[3],
  }, {
    backgroundImage: 'https://via.placeholder.com/1920x257.png?text=Background+Image',
    ...solutionMetaData[0],
    ...solutionSummaries[4],
  },
  {
    backgroundImage: 'https://via.placeholder.com/1920x257.png?text=Background+Image',
    ...solutionMetaData[0],
    ...solutionSummaries[5],
  },
  {
    backgroundImage: 'https://via.placeholder.com/1920x257.png?text=Background+Image',
    ...solutionMetaData[0],
    ...solutionSummaries[6],
  },
];

const productSummaries: ProductSummary[] = [
  {
    id: '507F0707-4D7B-49A7-8588-EBD78F15C78E1',
    materialCode: 'materialcode1',
    backgroundImage: 'https://via.placeholder.com/728x90.png?text=Background+Image',
    logo: 'https://via.placeholder.com/300x400.png?text=Background+Image',
    name: 'Logo Payroll',
    slug: '',
    description: 'İK süreçleriniz dönüşüyor, verileriniz Logo güvencesi ile buluta taşınıyor!',
    solutions: [{
      id: '1',
      name: 'Bordro Yönetimi',
    }],
    isCloud: true,
    segmentId: ['1'],
    sectorId: ['1'],
    cloud: {link: 'http://google.com'},
    onPremise: {link: 'http://google.com'},
    stars: 5,
    price: {
      id: '1',
      cost: 50,
      symbol: '₺', // ₺, $, € iso standartı
      includeTax: false, // false
      currency: 'TRY', // EUR, TRY, USD iso standardı
      promo: 5,
      discount: 5,
    },
  },
  {
    id: '507F0707-4D7B-49A7-8588-EBD78F15C78E2',
    materialCode: 'materialcode2',
    backgroundImage: 'https://via.placeholder.com/728x90.png?text=Background+Image',
    logo: 'https://via.placeholder.com/300x400.png?text=Background+Image',
    name: 'Logo İşbaşı',
    slug: '',
    description: 'İster e-Fatura İster Ön Muhasebe…\n' +
      'İhtiyacınıza en uygun çözümler Logo İşbaşı’nda!',
    solutions: [{
      id: '2',
      name: 'Ön Muhasebe Yönetimii',
    }],
    isCloud: true,
    segmentId: ['2'],
    sectorId: ['2'],
    cloud: {link: 'http://google.com'},
    onPremise: {link: 'http://google.com'},
    stars: 5,
    price: {
      id: '2',
      cost: 100,
      symbol: '₺', // ₺, $, € iso standartı
      includeTax: false, // false
      currency: 'TRY', // EUR, TRY, USD iso standardı
      promo: 5,
      discount: 5,
    },
  },
  {
    id: '507F0707-4D7B-49A7-8588-EBD78F15C78E3',
    materialCode: 'materialcode3',
    backgroundImage: 'https://via.placeholder.com/728x90.png?text=Background+Image',
    logo: 'https://via.placeholder.com/300x400.png?text=Background+Image',
    name: 'Logo Döküman Yönetim Servisi',
    slug: '',
    description: 'İK süreçleriniz dönüşüyor, verileriniz Logo güvencesi ile buluta taşınıyor!',
    solutions: [{
      id: '3',
      name: 'Doküman Yönetimi',
    }],
    isCloud: true,
    segmentId: ['3'],
    sectorId: ['3'],
    cloud: {link: 'http://google.com'},
    onPremise: {link: 'http://google.com'},
    stars: 5,
    price: {
      id: '3',
      cost: 150,
      symbol: '₺', // ₺, $, € iso standartı
      includeTax: false, // false
      currency: 'TRY', // EUR, TRY, USD iso standardı
      promo: 5,
      discount: 5,
    },
  },
];

const productSegments: Segment[] = [
  {
    id: 'd1fdf61e-0ab5–433d-9b19-de09425b1e41',
    title: 'Mikro Şirket',
    description: '1- 5 kişi arası',
    icon: 'https://www.flaticon.com/premium-icon/icons/svg/484/484624.svg',
  },
  {
    id: 'd1fdf61e-0ab5–433d-9b19-de09425b1e42',
    title: 'Orta büyüklük Şirket',
    description: '5-30 kişi arası',
    icon: 'https://www.flaticon.com/premium-icon/icons/svg/484/484573.svg',
  },
  {
    id: 'd1fdf61e-0ab5–433d-9b19-de09425b1e43',
    title: 'Büyük Şirket',
    description: '30+ kişi',
    icon: 'https://www.flaticon.com/premium-icon/icons/svg/484/484522.svg',
  },
];

const productQuestions: ProductQuestion[] = [
  {
    id: 'b6867510-55aa-4b01-aeff-9ba9af9f7500',
    title: 'Logo ürünleri ile hangi ihtiyacınıza çözüm bulmak\n istersiniz?',
    segmentId: ['d1fdf61e-0ab5–433d-9b19-de09425b1e41', 'd1fdf61e-0ab5–433d-9b19-de09425b1e42'],
    /**
     * Gösterilecek sorunun hangi ürün kategorilerine (Solution) ait olduğunu
     * anlamak için kullanılacaktır.
     */
    solutionId: 'string',
    /**
     * Soruların sağında ya da altında Kategori (Solution) bilgisini göstermek
     * amacı için kullanılacaktır.
     */
    solutionName: 'string',
  },
];
