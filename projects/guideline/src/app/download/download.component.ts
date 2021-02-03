import {Component, OnInit} from '@angular/core';
import {HeaderService} from '@logo-software/header';

@Component({
  selector: 'logo-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent implements OnInit {

  constructor(private headerService: HeaderService) {
  }

  ngOnInit(): void {
    // this.headerService.setDefaultTheme('darked');
  }

}