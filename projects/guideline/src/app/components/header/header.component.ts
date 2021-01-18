import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HeaderService } from './header.service';

@Component({
  selector: 'logo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private title: Title, public headerService: HeaderService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.headerService.$changeTitle.unsubscribe();
  }

}
