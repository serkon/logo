import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { SliderItem } from '@paas/src/app/services/idm/idm.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'logo-ms',
  templateUrl: './mrs.component.html',
  styleUrls: ['./mrs.component.scss'],
})
export class MrsComponent implements AfterViewInit {

  public sliderItems: SliderItem[];
  public opinions = [1];
  private bodyHeight: number;

  constructor(@Inject(DOCUMENT) private document) {
    this.sliderItems = [
      {
        icon: '/assets/images/services/mss/mss-usage-icon-1.svg',
        abbr: 'Mesaj kategorileri',
        title: '',
        description: 'Mesaj kategorilerine erişin.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/mss/mss-usage-icon-2.svg',
        abbr: 'Tanımlama düzenleme',
        title: '',
        description: 'Mesaj kategorisi tanımlayın ve düzenleyin.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/mss/mss-usage-icon-3.svg',
        abbr: 'Mesajlara erişim',
        title: '',
        description: 'Geçmiş mesajlara ve içeriklerine erişin.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/mss/mss-usage-icon-4.svg',
        abbr: 'Servislere abonelik',
        title: '',
        description: 'Subscribe olacağınız servisleri tanımlayın ve mesajlarınızı dinleyin.',
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
