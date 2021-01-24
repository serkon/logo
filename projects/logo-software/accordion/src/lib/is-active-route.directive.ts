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
