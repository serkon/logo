import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PopoverPosition, PopoverService } from '@logo-software/popover';

@Component({
  selector: 'logo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public PopoverPosition = PopoverPosition;

  public suggestResults = [
    {
      name: 'Logo Flow 3.0',
      link: '/docs/detail/logo-flow-3_0',
    },
    {
      name: 'Logo Flow 2.0',
      link: '/docs/detail/logo-flow-2_0',
    },
    {
      name: 'Logo Flow 1.0',
      link: '/docs/detail/logo-flow-1_0',
    },
  ];

  constructor(private router: Router, public popoverService: PopoverService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void {
    this.popoverService.closePopover();
  }

  doSearch() {
    this.router.navigateByUrl('/search/result');
  }

  getSuggestFor(val:string) {
    if (val.length > 2) {
      this.popoverService.showPopover('productSuggest');
    } else if (val.length < 3) {
      console.log('### Destroy Suggest Search');
      this.popoverService.closePopover();
    }
  }
}
