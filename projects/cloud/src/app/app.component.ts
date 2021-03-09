import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';

import { HeaderTheme } from '@logo-software/header';
import { IdmService } from '@logo-software/idm';

import { UserService } from '@cloud/app/services/auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked {
  public headerTheme = HeaderTheme;
  items = [];

  constructor(private cdr: ChangeDetectorRef, public idmService: IdmService, public userService: UserService) {
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
}
