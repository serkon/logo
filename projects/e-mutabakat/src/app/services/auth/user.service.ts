import { Injectable } from '@angular/core';

import { IdmService, User } from '@logo-software/idm';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: User;

  constructor(public idmService: IdmService) {
  }

  public subscribeUserInfo() {
    this.idmService.subscription.subscribe(info => {
      if (info.user) {
        this.user = info.user[0];
      }
    })
  }
}
