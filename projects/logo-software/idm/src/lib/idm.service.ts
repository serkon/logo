import { Inject, Injectable, OnDestroy } from '@angular/core';
import { IDM_CONFIG, IDM_ID } from './idm.module';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdmService {
  subscription: Subscription;

  constructor(
    @Inject(IDM_ID) public id: string,
    @Inject(IDM_CONFIG) public config,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    console.log('######', id, config, this.router.url);
  }

  isLogged() {
    // return this.restrictionService.validateToken();
  }
}
