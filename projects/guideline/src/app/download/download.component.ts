import {Component, OnInit} from '@angular/core';
import { HeaderService, HeaderTheme } from '@logo-software/header';

@Component({
  selector: 'logo-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent implements OnInit {

  constructor(private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.headerService.setDefaultTheme(HeaderTheme.SCROLL);
    this.headerService.isScrollSpy = false;
    window.location.href = window.location.origin + '/assets/led/v1.0.0.fig'
  }

}
