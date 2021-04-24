import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderTheme } from '@logo-software/header';
import { StyleService } from './style/style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public headerTheme = HeaderTheme;
  title = 'Logo Platform as a Service';

  constructor(private router: Router, private styleService: StyleService) {
    this.styleService.setStyle('main', '/assets/theme/main.css');
    this.styleService.setStyle('sub', '/assets/theme/sub.css');
  }

  ngOnInit() {
    this.styleService.append('main');
  }

  redirect(link: string) {
    this.router.navigate([link]);
  }
}
