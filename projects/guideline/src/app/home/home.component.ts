import { Component, OnInit } from '@angular/core';
import { DrawerService } from '../../../../logo-software/drawer/src/lib/drawer.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'logo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private drawerService: DrawerService) {
  }

  ngOnInit(): void {
    this.drawerService.toggle.next(false);
  }

}
