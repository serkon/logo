import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'logo-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements AfterViewInit {
  ngAfterViewInit() {
    console.log('Services');
  }
}
