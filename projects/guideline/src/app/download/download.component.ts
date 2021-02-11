import { Component, OnInit } from '@angular/core';
import { HeaderService } from '@logo-software/header';
import { DrawerService } from '@logo-software/drawer';

@Component({
  selector: 'logo-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent implements OnInit {

  constructor(private headerService: HeaderService, private drawerService: DrawerService) {
    this.drawerService.menu = false;
  }

  ngOnInit(): void {
    window.location.href = window.location.origin + '/assets/led/v1.0.0.fig';
    this.headerService.mobileMenu = false;
  }

}
