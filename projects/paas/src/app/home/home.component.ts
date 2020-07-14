import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'logo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  public quotes;
  public links;
  private bodyHeight: number;

  constructor(@Inject(DOCUMENT) private document, private router: Router) {
    this.quotes = [
      {story: 'People ignore design that ignores people', author: 'FRANK CHIMERO'},
      // {story: 'Good designs come from the heart, not from the brain', author: 'DANNY SENGERS'},
    ];
    this.links = {
      one: [
        {
          display: 'Services',
          description: `Based on Eva Design System, with 4 visual themes & handy variables to create your own. With hot-reload out of the box`,
          url: 'http://wiki.logo.com.tr/display/PAAS/UI+Elements',
          external: true,
        },
        {
          display: 'Docs',
          description: `Based on Eva Design System, with 4 visual themes & handy variables to create your own. With hot-reload out of the box`,
          url: '/docs',
          classes: ['ghost docs'],
        },
        {
          display: 'Blog',
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
    console.log('size changed: ');
    this.sections = this.document.querySelectorAll('section');
    this.sections.forEach(section => {
      section.style.minHeight = `${this.bodyHeight}px`;
    });
  }
}