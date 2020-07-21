import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PAAS';
  public links;

  constructor(private router: Router) {
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
      five: {
        corporate: [
          {url: '#', display: 'Corporate'},
          {url: '#', display: 'Contact'},
          {url: '#', display: 'Blog'},
          {url: '#', display: 'Carier'},
        ],
        legal: [
          {url: '#', display: 'Copyright'},
          {url: '#', display: 'Terms of Use'},
          {url: '#', display: 'Privacy'},
          {url: '#', display: 'Personal Data'},
          {url: '#', display: 'Cookie Policy'},
        ],
        socials: [{url: '#', display: 'twitter'}, {url: '#', display: 'facebook'}, {url: '#', display: 'youtube'}],
      },
      footer: {
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

  redirect(link: string) {
    this.router.navigate([link]);
  }
}
