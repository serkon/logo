import { Component } from '@angular/core';

import { IdmService } from '@logo-software/idm';

@Component({
  selector: 'logo-idm-showcase',
  templateUrl: './idm-showcase.component.html',
  styleUrls: ['./idm-showcase.component.scss'],
})
export class IdmShowcaseComponent {

  constructor(public idmService: IdmService) {
  }
}
