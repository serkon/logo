/**
 *
 * 1. Solution bilgileri eksik hangi solution olacak ve imaj bilgileri verilmeli
 */

/**
 * GET (/api/productFinder/stepList): Step[]
 * GET (/api/productFinder/segmentList): ProductSegment[]
 * POST (/api/productFinder/questionList - segmentId): ProductQuestion[]
 * POST (/api/productFinder/expectationList - segmentId, solutionId): ProductExpectation[]
 * GET (/api/product/solutionList): Solution[]
 * POST (/api/product/summaryList - {filter: {segmentId, solutionId, sectorId, tags}}): ProductSummary[]
 * GET (/api/blog/summaryList - {paging: {count: number, page: number}, order: Date | Author, filter:{tag: tags[], solutionId: string}} ): BlogSummaryResponse[]
 * GET (/api/blog/tagList): Tag[]
 * POST (/api/blog/blog - id): Blog
 */

/**
 * ###### Product Finder API's
 *
 *
 */

/**
 *  - Çözümler (Solution) ile imajlar, açıklamalar ve title bilgisine ihtiyaç var (6 adet çözüm için).
 *  - Star olacak mı ilk MVP'de ve Fiyat bilgilsi Ürün bazında mı, yoksa Product bazında mı olacak?
 *  - Blog sayfası logo.com.tr'deki bilgilerden alınabilir. Eğer öyle olursa bu bilgilerin hepsine erişemiyor durumda oluruz. Bu durumda Date, Author, Solution ve Product bazında bir filtreleme yapamayız (Author, solutionId, )
 *  - Tag'ler neler olacak (Blog ile Product tag'leri aynı mı?)
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
  selection?: ProductSegment[] | ProductQuestion[] | ProductExpectation[] | ProductSummary[];
}

/**
 * Kurumdaki çalışan sayısına göre satın alınacak ürün kırılımını ifade eder.
 */
export interface ProductSegment {
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
   * Şirket büyüklüğünü ifade eden imaj path'i (blob | string)
   * Örneğin: "http://xyz.com/kobi.svg"
   */
  image: string;
}

/**
 * Step 2 de yer alacak soruları ifade eder. İhtiyaçları daha iyi anlamak adına
 * kullanıcıya gösterilecek seçenekleri ifade eder
 */
export interface ProductQuestion {
  id: string;
  title: string;
  segmentId: string[];
  solutionId: string;
  solutionName: string;
}

export interface ProductExpectation {
  id: string;
  title?: string;
  sectorId: string;
  sectorName: string;
  segmentId: string[];
  solutionId: string[];
}

// Solution
export interface SolutionSummary {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Solution extends SolutionSummary, SolutionMetaData {
  backgroundImage?: string;
}

export interface SolutionMetaData {
  meta: {
    id: string;
    main: {
      title: string;
      description: string;
      image: string;
    },
    features: [
      {
        title: string;
        description: string;
        image: string;
      }
    ],
    summaries: [{
      title: string;
      description: string;
      image: string;
    }]
  }
}

// FAQ
export interface FAQ {
  id: string;
  title: string;
  description: string;
  solutionId: string[];
  productId: string[];
  isOpen: boolean;
}

// Product
export interface ProductSummary {
  id: string; // GUID 507F0707-4D7B-49A7-8588-EBD78F15C78E
  materialCode?: string;
  backgroundImage?: string;
  logo: string;
  name: string;
  description: string;
  solutions: string[];
  isCloud: boolean;
  segmentId: string[];
  solutionId: string[];
  sectorId: string[];
  cloud?: { link: string };
  onPremise?: { link: string },
  stars?: number; // mvp 1 de olmayabilir
  price?: Price;
}

export interface Price {
  id: string;
  cost: number;
  symbol: string; // ₺, $, € iso standartı
  includeTax?: boolean; // false
  currency?: string; // EUR, TRY, USD iso standardı
  type?: PriceType;
  promo?: number;
  discount?: number;
  properties?: PriceProperty[]
}

export interface PriceProperty {
  id: string;
  title: string;
  isNew: boolean;
}

export enum PriceType {
  DAILY,
  MONTHLY,
  YEARLY,
}

export interface Tag {
  id: string;
  name: string;
}

// BLOG
export interface BlogSummary {
  id: string;
  image: string;
  tags: Tag[];
  title: string;
  description: string;
  date: { publish: string };
  author: TestimonialAuthor;
  readCount: number;
}

export interface Blog extends BlogSummary {
  html: string;
  tags: Tag[];
  otherTags: Tag[];
  similar: BlogSummaryResponse;
}

export interface BlogSummaryResponse {
  id: string;
  blogs: BlogSummary[];
  page: number;
  count: number;
  total: number;
}

// TESTIMONIAL
export interface TestimonialAuthor {
  id: string;
  name: string;
  surname: string;
  companyName?: string;
  title?: string;
}

export class Testimonial {
  id: string;
  image: string;
  author: TestimonialAuthor;
  star: number;
  title: string;
  description: string;
  solutionId: string[];
  productId: string[];
}

// Data Samples
const solutions: SolutionSummary[] = [
  {
    id: '1',
    name: 'Muhasebe Yönetimi',
    description: 'İster Webden İster Cepten; İnternet Erişiminizin Olduğu Her Yerden İşletmenizin Ön Muhasebe İşlemlerini...',
    image: '',
  },
  {
    id: '2',
    name: 'Bordro ve İnsan Kaynakları Yönetimi',
    description: 'Hızlı, güvenli, güncel mevzuata uyumlu yeni nesil bordro ve insan kaynakları çözümlerine ulaşın.',
    image: '',
  },
  {
    id: '3',
    name: 'Doküman Yönetimi',
    description: 'Kurumunuzdaki tüm dokümanları buluta taşıyın, Logo Doküman Yönetimi Servisi sayesinde güvenle kullanın ve saklayın.',
    image: '',
  },
  {id: '4', name: 'Parakende Yönetimi', description: '', image: ''},
  {id: '6', name: 'İş Sağlığı ve Güvenliği Yönetimi', description: '', image: ''},
  {id: '5', name: 'E-Çözümler', description: '', image: ''},
];
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
        image: 'icon_path',
      },
      {
        id: '2',
        title: 'KOBİ',
        description: 'Ekibimiz 5-50 kişi arası.',
        image: 'icon_path',
      },
      {
        id: '2',
        title: 'Büyük Şirket',
        description: 'Ekibimiz 50 kişiden fazla.',
        image: 'icon_path',
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
        description: 'İK süreçleriniz dönüşüyor, verileriniz Logo güvencesi ile buluta taşınıyor!',
        solutions: ['Bordro ve İnsan Kaynakları Yönetimi'],
        isCloud: false,
        solutionId: ['1', '2', '3'],
        sectorId: ['1', '2', '3'],
        segmentId: ['1', '2', '3'],
        onPremise: {link: 'http://wwww.logo.com.tr/bordro-yonetimi'},
      },
      {
        id: '2',
        backgroundImage: 'background-logo-isbasi.jpg',
        logo: 'logo-isbasi.png',
        name: 'Ön Muhasebe Yönetimi',
        description: 'İster e-Fatura İster Ön Muhasebe İhtiyacınıza en uygun çözümler Logo İşbaşı’nda!',
        solutions: ['Muhasebe Yönetimi'],
        isCloud: true,
        solutionId: ['1', '2', '3'],
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
        description: 'İK süreçleriniz dönüşüyor, verileriniz Logo güvencesi ile buluta taşınıyor!',
        solutions: ['Dokuman Yönetimi'],
        isCloud: true,
        segmentId: ['1', '2', '3'],
        solutionId: ['1', '2', '3'],
        sectorId: ['1', '2', '3'],
        cloud: {link: 'http://logo.cloud/product/dokuman-yonetimi'},
        stars: 5,
        price: {id: '2', cost: 30, symbol: '₺', includeTax: false},
      },
    ],
  },
];
