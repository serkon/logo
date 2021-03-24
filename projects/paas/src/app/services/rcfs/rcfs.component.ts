import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { SliderItem } from '@paas/src/app/services/idm/idm.component';


@Component({
  selector: 'logo-ms',
  templateUrl: './rcfs.component.html',
  styleUrls: ['./rcfs.component.scss'],
})
export class RcfsComponent implements AfterViewInit {

  public sliderItems: SliderItem[];
  public opinions = [1];
  private bodyHeight: number;

  constructor(@Inject(DOCUMENT) private document) {
    this.sliderItems = [
      {
        icon: '/assets/images/services/rcfs/rcfs-specs-check.svg',
        abbr: 'Servis geliştirme ekiplerini ayarlayın',
        title: '',
        description: 'Development takımları oluşturun ve yönetin. Takım üyeleri oluşturun ve yönetin.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/rcfs/rcfs-specs-check.svg',
        abbr: 'Breaking change notification desteği',
        title: '',
        description: 'Servis sürüm değişikliklerinde bilgilendirme mailleri ile süreçlerini daha kolay yönetin.\n',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/rcfs/rcfs-specs-check.svg',
        abbr: 'Jira entegrasyonu',
        title: '',
        description: 'Herhangi bir servisin sürüm değişikliği ile ilgili sprintte bulunan jira maddelerini bulun ve yapılanları takip edin.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/rcfs/rcfs-specs-check.svg',
        abbr: 'Jira sorumlularına mail atın',
        title: '',
        description: 'Takip ettiğiniz jira maddelerini ilgili sürüm ile ilgili kolayca mail atarak bilgilendirin.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/rcfs/rcfs-specs-check.svg',
        abbr: 'GitLab entegrasyonu',
        title: '',
        description: 'GitLab entegrasyonu sayesinde farklı ortamlarda çalışan farklı sürümlerdeki servislerin konfigürasyonlarını kolayca karşılaştırın.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/rcfs/rcfs-specs-check.svg',
        abbr: 'Farklı ortamlarda sürüm kurulumu',
        title: '',
        description: 'Farklı ortamlardaki servislerin sürümlerini bir ortamdan diğerine taşıyın ve kurulumlarını kolayca yapın. ',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/rcfs/rcfs-specs-check.svg',
        abbr: 'MSSQL ve PostgreSQL desteği',
        title: '',
        description: 'İki farklı veritabanı desteği sayesinde farklı veritabanlarında bu bilgileri depolayın ve yönetin.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/rcfs/rcfs-specs-check.svg',
        abbr: 'Swagger UI desteği',
        title: '',
        description: 'Swagger UI desteği sayesinde servis API uçları üzerinden diagnose verilerine kolayca erişin.',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/rcfs/rcfs-specs-check.svg',
        abbr: 'Kullanıcı arayüz desteği',
        title: '',
        description: 'Arayüz desteği sayesinde PaaS ekosisteminde yaşayan servisleri, farklı ortamdardaki (test, staging, production) aynı servislerin versiyon farklılıklarını kolayca görüntüleyin ve süreçlerinizi çok daha kolay hale getirin.',
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
