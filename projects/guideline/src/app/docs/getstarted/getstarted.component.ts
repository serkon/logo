import { Component, OnInit } from '@angular/core';
import { HeaderService } from '@logo-software/header';

@Component({
  selector: 'logo-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.scss'],
})
export class GetstartedComponent implements OnInit {

  constructor(private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.headerService.mobileMenu = false;
  }

}
