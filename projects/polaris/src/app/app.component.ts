import { Component } from '@angular/core';

import { HeaderTheme } from '@logo-software/header';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public headerTheme = HeaderTheme;

  public languages = [
    {
      name: 'Türkçe',
      value: 'tr',
    },
    {
      name: 'English',
      value: 'en',
    },
  ];

  public urlCase: number;

  constructor(public router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.urlCase = this.router.url.length;
      }
    });
  }

  public theLanguage = this.languages[0];

  public onLangSelect(e) {
    console.log('Selected Language', e);
  }

  public logMeIn() {
    console.log('IDM Login Action');
  }

  public getHeaderLogo() {
    if (this.urlCase > 1) {
      return '/assets/img/logo-sub.png';
    } else {
      return '/assets/img/logo.png';
    }
  }
}
