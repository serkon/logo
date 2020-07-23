import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  links = [
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
  ];

  constructor(private router: Router) {
  }

}
