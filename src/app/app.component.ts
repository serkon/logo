/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, OnInit } from '@angular/core';

import { IdmService } from '@logo-software/idm';

import { NgdAnalytics } from './@theme/services/analytics.service';

@Component({
  selector: 'ngd-app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [':host {width: 100%}'],
})
export class NgdAppComponent implements OnInit {
  title = 'Logo Design Guide';

  constructor(private analytics: NgdAnalytics, public idmService: IdmService) {
    this.idmService.subscription.subscribe((item) => console.log(item));
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }

  login() {
    this.idmService.toLogin();
  }

  logout() {
    this.idmService.logout();
  }
}
