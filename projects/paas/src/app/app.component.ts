import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'PAAS';
  public links = [
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

  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    console.log('App');
  }

  redirect(link: string) {
    this.router.navigate([link]);
  }
}
