import { Component } from '@angular/core';
import { Link } from '@logo-software/link';

@Component({
  selector: 'logo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public links: Link[] = [
    {
      display: 'Services',
      description: `Based on Eva Design System, with 4 visual themes & handy variables to create your own. With hot-reload out of the box`,
      url: '/',
      external: false,
      fragment: 'services',
      onClick: (event: MouseEvent) => console.log('alert'),
    },
    {
      display: 'Docs',
      description: `Based on Eva Design System, with 4 visual themes & handy variables to create your own. With hot-reload out of the box`,
      url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65132817',
      external: true,
      classes: ['ghost', 'docs'],
    },
    {
      display: 'Blog',
      description: 'Native Angular components with configurable styles',
      url: 'http://wiki.logo.com.tr/pages/viewrecentblogposts.action?key=PSDOC',
      external: true,
    },
  ];
}
