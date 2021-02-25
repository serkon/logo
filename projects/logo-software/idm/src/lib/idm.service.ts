import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { IDM_CONFIG, IDM_ID, IDMConfig } from './idm.module';
import { RestrictionService } from './service/restriction.service';
import { StorageClass } from '@logo-software/storage';
import { Token } from './interface/token';
import { User } from './interface/user';

@Injectable({
  providedIn: 'root',
})
export class IdmService {
  subscription: Subscription;
  token: string;

  constructor(
    @Inject(IDM_ID) public clientId: string,
    @Inject(IDM_CONFIG) public config: IDMConfig,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private restrictionService: RestrictionService,
  ) {
  }

  isLogged() {
    return this.restrictionService.validateToken(StorageClass.getItem('token'));
  }

  toLogin() {
    this.restrictionService.toLogin();
  }

  getTokenWithCode(code: string) {
    this.restrictionService.getTokenWithCode(code);
  }

  validateToken(token: string) {
    if (token) {
      this.restrictionService.validateToken(token).then(async () => {
        const token1: Token = StorageClass.getItem('validated');
        const userId: string = token1.UserId;
        const users = this.getUserList([userId]).subscribe((response:User[]) => {
          console.log(response);
          StorageClass.setItem('user', response[0]);
        });
      });
    }
  }

  getUserList(ids: string[]) {
    return this.http.get(
      `${this.config.URI}/${this.config.USER.LIST}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${StorageClass.getItem('token')}`,
          ids,
        }),
      },
    );
  }

}
