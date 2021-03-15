import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { HeaderService, HeaderTheme } from '@logo-software/header';
import { IdmService } from '@logo-software/idm';

import { UserService } from '@cloud/app/services/auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked, OnInit {
  public headerTheme = HeaderTheme;
  items = [];

  constructor(
    private cdr: ChangeDetectorRef,
    public idmService: IdmService,
    public userService: UserService,
    private router: Router,
    private headerService: HeaderService,
  ) {
    this.userService.subscribeUserInfo();
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  login() {
    this.idmService.toLogin();
  }

  logout() {
    this.idmService.logout();
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
      if (this.headerService.mobileMenu) {
        this.headerService.mobileMenu = !this.headerService.mobileMenu;
      }
    });
  }
}
