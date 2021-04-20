import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { SliderItem } from '@developer/src/app/services/idm/idm.component';

@Component({
  selector: 'logo-ms',
  templateUrl: './ls.component.html',
  styleUrls: ['./ls.component.scss'],
})
export class LsComponent implements AfterViewInit {

  public sliderItems: SliderItem[];
  public opinions = [1];
  private bodyHeight: number;

  constructor(@Inject(DOCUMENT) private document) {
    this.sliderItems = [
      {
        icon: '/assets/images/services/idm/section-04-02.svg',
        abbr: 'Aliquam interdum sapien ',
        title: '',
        description: 'Nulla rhoncus dui id neque cursus viverra. Maecenas orci lacus, lacinia eu auctor\n' +
          'Nulla rhoncus dui id neque cursus viverra. Maecenas orci lacus, lacinia eu auctor  \n',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-03.svg',
        abbr: 'Aliquam interdum sapien ',
        title: '',
        description: 'Nulla rhoncus dui id neque cursus viverra. Maecenas orci lacus, lacinia eu auctor\n' +
          'Nulla rhoncus dui id neque cursus viverra. Maecenas orci lacus, lacinia eu auctor  \n',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-04.svg',
        abbr: 'Aliquam interdum sapien ',
        title: '',
        description: 'Nulla rhoncus dui id neque cursus viverra. Maecenas orci lacus, lacinia eu auctor\n' +
          'Nulla rhoncus dui id neque cursus viverra. Maecenas orci lacus, lacinia eu auctor  \n',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-05.svg',
        abbr: 'Aliquam interdum sapien ',
        title: '',
        description: 'Nulla rhoncus dui id neque cursus viverra. Maecenas orci lacus, lacinia eu auctor\n' +
          'Nulla rhoncus dui id neque cursus viverra. Maecenas orci lacus, lacinia eu auctor  \n',
        url: '',
        classes: '',
      },
      {
        icon: '/assets/images/services/idm/section-04-06.svg',
        abbr: 'Aliquam interdum sapien ',
        title: '',
        description: 'Nulla rhoncus dui id neque cursus viverra. Maecenas orci lacus, lacinia eu auctor\n' +
          'Nulla rhoncus dui id neque cursus viverra. Maecenas orci lacus, lacinia eu auctor  \n',
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
