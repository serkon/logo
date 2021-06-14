import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { HeaderService, HeaderTheme } from '@logo-software/header';
import { IdmService } from '@logo-software/idm';
import { PopoverPosition } from '@logo-software/popover';

import { UserService } from '@polaris/app/services/auth/user.service';

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

  public PopoverPosition = PopoverPosition;

  constructor(
    public router: Router,
    public idmService: IdmService,
    public userService: UserService,
    private headerService: HeaderService,
  ) {
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
    this.idmService.toLogin();
  }

  public logMeOut() {
    this.idmService.logout();
  }

  public getHeaderLogo() {
    if (this.urlCase > 1 || this.headerService.activeTheme === HeaderTheme.SCROLL) {
      return '/assets/img/logo-sub.png';
    } else {
      return '/assets/img/logo.png';
    }
  }
}
