import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { SliderItem } from '@developer/src/app/services/idm/idm.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'logo-ms',
  templateUrl: './rs.component.html',
  styleUrls: ['./rs.component.scss'],
})
export class RsComponent implements AfterViewInit {

  public sliderItems: SliderItem[];
  public opinions = [1];

  private bodyHeight: number;

  constructor(@Inject(DOCUMENT) private document) {
    this.sliderItems = [
      {
        icon: '/assets/images/services/rs/rs-specs-icon-1.svg',
        abbr: 'Cok kiracılı altyapı (Multitenancy)',
        title: '',
        description: 'Rapor şablonları ve çıktıları kiracı bazında farklı veritabanlarında tutulmaktadır.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/rs/rs-specs-icon-2.svg',
        abbr: 'Java uygulamaları için client desteği',
        title: '',
        description: 'Java uygulamaları, java client ‘ını kullanarak Raporlama Servisine kolayca entegre olabilirler.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/rs/rs-specs-icon-3.svg',
        abbr: 'Swagger UI Destekli API Uçları  ',
        title: '',
        description: 'Desteklenen API uçlarına Swagger UI üzerinden kolayca ulaşın',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/rs/rs-specs-icon-4.svg',
        abbr: 'Ölçeklenebilir yapı',
        title: '',
        description: 'Oturum bağımsız mimarisi ile Raporlama servisini çoklayarak kullanabilirsiniz.',
        url: '',
        classes: '',
      },
    ];
  }

  ngAfterViewInit() {
    console.log('CC');
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
