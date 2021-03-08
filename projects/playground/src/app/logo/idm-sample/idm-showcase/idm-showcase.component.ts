import { Component } from '@angular/core';

import { IdmService, User } from '@logo-software/idm';
import { StorageClass } from '@logo-software/storage';

@Component({
  selector: 'logo-idm-showcase',
  templateUrl: './idm-showcase.component.html',
  styleUrls: ['./idm-showcase.component.scss'],
})
export class IdmShowcaseComponent {
  user: User[] | string = 'No user data found' ;

  constructor(public idmService: IdmService) {
    this.user = StorageClass.getItem('user');
      this.idmService.subscription.subscribe((item) => {
      console.log('IdmShowcaseComponent: ', item);
      this.user = item.user ? item.user: 'No user data found';
    });
  }

  login() {
    this.idmService.toLogin();
  }

  logout() {
    this.idmService.logout();
  }

}
