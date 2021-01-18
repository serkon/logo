import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../components/header/header.service';

@Component({
  selector: 'logo-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setHeaderTitle('Docs');
  }

  ngOnInit(): void {
  }

}
