import { Component, OnDestroy } from '@angular/core';
import { StyleService } from '../style/style.service';

@Component({
  selector: 'logo-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnDestroy {
  constructor(private styleService: StyleService) {
    this.styleService.append('sub');
  }

  ngOnDestroy() {
    this.styleService.remove('sub');
  }
}
