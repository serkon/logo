import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'PAAS';

  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    console.log('App');
  }

  redirect(link: string) {
    this.router.navigate([link]);
  }
}
