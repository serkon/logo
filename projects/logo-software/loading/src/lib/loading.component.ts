import { Component } from '@angular/core';

import { LoadingService } from './loading.service';

@Component({
  selector: 'logo-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {

  constructor(public loadingService: LoadingService) {
  }

}
