import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';

import { HeaderTheme } from '@logo-software/header';
import { IdmService } from '@logo-software/idm';
import { StorageClass } from '@logo-software/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked {
  public headerTheme = HeaderTheme;
  items = [];
  public userInfo = [];

  constructor(private cdr: ChangeDetectorRef, public idmService: IdmService) {
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
    if (this.idmService.isLogged) {
      setTimeout(() => {
        this.getUserInfo();
      }, 150);
    }
  }

  login() {
    this.idmService.toLogin();
  }

  logout() {
    this.idmService.logout();
  }

  private getUserInfo() {
    this.userInfo = StorageClass.getItem('user');
  }
}
