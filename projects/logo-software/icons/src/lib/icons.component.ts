import { Component, OnInit } from '@angular/core';
import { LOGO_ICONS } from './logo-icons';

@Component({
  selector: 'logo-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {

  constructor() {
    console.log('Icons is : ', LOGO_ICONS);
  }

  ngOnInit(): void {
  }

}
