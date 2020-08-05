/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, OnInit } from '@angular/core';
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

  constructor(private analytics: NgdAnalytics) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
