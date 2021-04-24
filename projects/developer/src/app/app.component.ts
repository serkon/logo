import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderTheme } from '@logo-software/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public headerTheme = HeaderTheme;
  title = 'Logo Platform as a Service';

  constructor(private router: Router) {
  }

  redirect(link: string) {
    this.router.navigate([link]);
  }
}
