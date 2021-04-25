import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'logo-ms',
  templateUrl: './dafs.component.html',
  styleUrls: ['./dafs.component.scss'],
})
export class DafsComponent implements AfterViewInit {

  public sliderItems;
  public opinions = [1];
  private bodyHeight: number;

  constructor(@Inject(DOCUMENT) private document) {
    this.sliderItems = [
      {
        icon: '/assets/images/services/dafs/icon-01.svg',
        abbr: 'Çoklu hesap (Multi Tenany) desteği',
        description: 'Çoklu Hesap (Multitenancy ) destekli ve kullanıcı özelinde veri kaynakları oluşturun. Verti kaynaklarını parametrik olarak hesap ve kullanıcı özelinde filtreleyin.',
      },
      {
        icon: '/assets/images/services/dafs/icon-02.svg',
        abbr: ' Dashboard Yetkilendirme',
        description: 'Dashboard tanımlarken vereceğiniz yetki koduna sahip kullanıcılar sadece sizin dashboardlarınıza bakabilsin.',
      },
      {
        icon: '/assets/images/services/dafs/icon-03.svg',
        abbr: 'Dinamik Rest Url desteği',
        description: 'Veri kaynağı tanımlarken Rest Url lerinizi Eureaka ya da Bulut Yönetim…',
      },
      {
        icon: '/assets/images/services/dafs/icon-04.svg',
        abbr: 'Veri yenileme sıklığı',
        description: 'Verilerinizin yenilenme sıklığını veri kaynağı tanımında belirleyin.',
      },
      {
        icon: '/assets/images/services/dafs/icon-05.svg',
        abbr: 'Hazır Görsel Bileşen Kütüphanesi',
        description: 'Görsel bileşenlerinizi hazır görsel bileşen listesinden seçerek Görsel bileşen tanımlama sihirbazında sonuçları görerek tasarlayın.',
      },
      {
        icon: '/assets/images/services/dafs/icon-06.svg',
        abbr: 'Esnek Filtre Tanımları',
        description: 'Dashboard tanımlarınıza filtreler ekleyin bu filtreler ile dashboardunuzda yer alan dilediğiniz görsel bileşen arasında ki ilişkiyi tanımlayın ve sadece tanımladığınız bileşenler filtreden etkilensin',
      },
      {
        icon: '/assets/images/services/dafs/icon-07.svg',
        abbr: 'Dinamik Verili Filtre Tanımları',
        description: 'Dashboard bileşeneinize tanımladığınız filtrelerin içeriği değişken olarak verilerinizden süzülerek otomatik oluşsun.',
      },
      {
        icon: '/assets/images/services/dafs/icon-08.svg',
        abbr: 'Esnek Dashboard İzleme',
        description: 'Embed modda da kullanabileceğiniz dashboar izleme sayfasında, eklenen filtre alanlarını ve görsel bileşenleri birlikte görün dilediğiniz bileşenin boyutunu ve yerini değiştirin.',
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
