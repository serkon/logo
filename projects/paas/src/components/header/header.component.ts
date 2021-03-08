import { Component } from '@angular/core';
import { Link } from '@logo-software/links';

@Component({
  selector: 'logo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public links: Link[] = [
    {
      display: 'Servisler',
      description: ``,
      url: '/',
      external: false,
      fragment: 'services',
    },
    {
      display: 'Docs',
      description: ``,
      url: 'http://wiki.logo.com.tr/pages/viewpage.action?pageId=65132817',
      external: true,
      classes: ['ghost', 'docs'],
    },
    {
      display: 'Guideline',
      description: `Based on Logo Design System`,
      url: 'http://design.logo.com.tr',
      external: true,
      classes: ['ghost'],
    },
    {
      display: 'Blog',
      description: 'Native Angular components with configurable styles',
      url: 'http://wiki.logo.com.tr/pages/viewrecentblogposts.action?key=PSDOC',
      external: true,
    },
  ];
}
