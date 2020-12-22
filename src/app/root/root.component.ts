import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements AfterViewInit {
  title = 'Logo Design Guide';
  public quotes;
  public links;
  private bodyHeight: number;

  constructor(@Inject(DOCUMENT) private document, private router: Router) {
    this.quotes = [
      // {story: 'People ignore design that ignores people', author: 'FRANK CHIMERO'},
      {story: 'Good designs come from the heart, not from the brain', author: 'DANNY SENGERS'},
    ];
    this.links = {
      one: [
        {
          display: 'GUIDELINE',
          description: `Logo Elements Design System`,
          url: 'http://wiki.logo.com.tr/display/PAAS/UI+Elements',
          external: true,
        },
        {
          display: 'ICONS',
          description: 'Logo Icon Library',
          url: 'docs/components/icons-module',
        },
        {
          display: 'ANGULAR',
          description: 'Native Angular components with configurable styles',
          url: 'docs/components/components-overview',
        },
        {
          display: 'VAADIN',
          description: `Logo Elements Vaadin Theme`,
          url: '/docs',
          classes: ['docs'],
        },
        {
          display: 'LOWCODE',
          description: 'Logo Elements .Net & Bootstrap Theme',
          url: '/docs',
        },
        {
          display: 'BLOG',
          description: 'Native Angular components with configurable styles',
          url: 'docs/components/components-overview',
        },
      ],
      four: [
        {url: '#', display: 'Corporate'},
        {url: '#', display: 'Contact'},
        {url: '#', display: 'Blog'},
        {url: '#', display: 'Carier'},
      ],
      footer: {
        socials: [{url: '#', display: 'twitter'}, {url: '#', display: 'facebook'}, {url: '#', display: 'youtube'}],
        terms: [
          {url: '#', display: 'Copyright'},
          {url: '#', display: 'Terms of Use'},
          {url: '#', display: 'Privacy'},
          {url: '#', display: 'Personal Data'},
          {url: '#', display: 'Cookie Policy'},
        ],
      },
    };
  }

  /** The Window object from Document defaultView */
  get window(): Window {
    return this.document.defaultView;
  }

  private _sections: HTMLElement[] = [];

  get sections() {
    return this._sections;
  }

  set sections(value) {
    this._sections = value;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('resized');
    this.resize();
  }

  ngAfterViewInit(): void {
    this.resize();
  }

  redirect(link: string) {
    this.router.navigate([link]);
  }

  resize() {
    this.bodyHeight = this.document.documentElement.clientHeight;
    this.sections = this.document.querySelectorAll('section');
    this.sections.forEach(section => {
      section.style.minHeight = `${this.bodyHeight}px`;
    });
  }
}
