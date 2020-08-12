import { Component } from '@angular/core';
import { Link } from '@logo-software/links';

@Component({
  selector: 'logo-link-showcase',
  templateUrl: './link-showcase.component.html',
  styleUrls: ['./link-showcase.component.scss'],
})
export class LinkShowcaseComponent {

  public links: Link[] = [
    {
      display: 'Services',
      description: `Based on Eva Design System, with 4 visual themes & handy variables to create your own. With hot-reload out of the box`,
      url: '/',
      external: false,
      fragment: 'services',
      onClick: (event: MouseEvent) => console.log('aler'),
    },
    {
      display: 'Docs',
      description: `Based on Eva Design System, with 4 visual themes & handy variables to create your own. With hot-reload out of the box`,
      url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65132817',
      external: true,
      classes: ['ghost docs'],
    },
    {
      display: 'Blog',
      description: 'Native Angular components with configurable styles',
      url: '#',
    },
  ];

}
