/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { AfterContentInit, Directive, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';

/**
 * Emits the defined method when route is active and set a class name when route is active.
 *
 * __Usage Example:__
 *
 * ```html
 * <a
 *    [routerLink]="['home']"
 *    routerLinkActive="add-active-css-class"
 *    #reference="routerLinkActive"
 *    [isActiveRoute]="reference"
 *    (isActiveRouteEmitter)="isActiveRoute($event)"
 *  >
 *  Link to Home
 *  </a> - this link is {{route && route.isActive ? 'active' : 'not active'}}
 * ```
 */
@Directive({
  selector: '[isActiveRoute]',
})
export class IsActiveRouteDirective implements AfterContentInit, OnDestroy {
  @Input() isActiveRoute: RouterLinkActive;
  @Output() isActiveRouteEmitter: EventEmitter<RouterLinkActive> = new EventEmitter<RouterLinkActive>();
  private subscription: Subscription;

  constructor(private router: Router) {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.update();
      }
    });
  }

  ngAfterContentInit(): void {
    this.update();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private update(): void {
    Promise.resolve().then(() => {
      if (this.isActiveRoute && this.isActiveRoute.isActive) {
        this.isActiveRouteEmitter.emit(this.isActiveRoute);
      }
    });
  }
}
