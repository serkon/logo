import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { timer } from 'rxjs';

import { Link } from './link';
import { LinkService } from './link.service';

/**
 * Link component creates link. Advantage of using this component is give the control
 * of route to same domain or redirect to external domain to app. Or it gives easily direction to anchor link.
 *
 * __Usage Example__
 *
 * Before use add below options to NgModule annotation
 *
 * ```typescript
 * @NgModule({
 * imports: [RouterModule.forRoot(routes, {
 *   scrollPositionRestoration: 'enabled',
 *   anchorScrolling: 'enabled',
 *   scrollOffset: [0, 0],
 * })],
 * exports: [RouterModule],
 * })
 * export class AppRoutingModule {
 * }
 * ```
 *
 * Then use in your *.component.html below code snippet:
 *
 * <sub>sample.component.html</sub>
 * ```html
 * <logo-link
 *    [classes]="['success', 'large']"
 *    external="true"
 *    url="http://wiki.logo.com.tr/pages/viewpage.action?pageId=65132817"
 *  >
 *  TÜMÜNÜ GÖRÜNTÜLE
 * </logo-link>
 * ```
 */
@Component({
  selector: 'logo-link',
  template: `
    <ng-container *ngTemplateOutlet="external ? externalURL: internalURL">
    </ng-container>
    <ng-template #internalURL>
      <button
        [ngClass]="classes"
        (click)="onClickEvent($event, false)"
        (mouseenter)="onHoverEvent($event)"
        (mouseleave)="onLeaveEvent($event)"
      >
        <ng-container *ngTemplateOutlet="display ? displayHTML : contentHTML"></ng-container>
      </button>
    </ng-template>
    <ng-template #externalURL>
      <button [ngClass]="classes" (click)="onClickEvent($event, external)">
        <ng-container *ngTemplateOutlet="display ? displayHTML : contentHTML"></ng-container>
      </button>
    </ng-template>
    <ng-template #displayHTML>{{display}}</ng-template>
    <ng-template #contentHTML>
      <ng-content></ng-content>
    </ng-template>
  `,
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  /**
   * Disable navigation when it set to false. Default is true.
   */
  @Input() redirection: boolean = true;
  /**
   * Add delay when click link before route. Default is zero.
   */
  @Input() delay: number = 0;
  /**
   * If this link will redirect to another domain, it must be set to true. Otherwise, it will redirect the current domain
   */
  @Input() external: boolean = false;
  /**
   * Fragment uses to redirection to the anchor.
   * For example, the fragment must be set to `section` for direction to `http://domain.com/#section`
   */
  @Input() fragment: string;
  /**
   * Direction address. When clicked link angular router direct to this url
   */
  @Input() url: string | string[];
  /**
   * A collection of matrix and query URL parameters.
   */
  @Input() params: Params;
  /**
   * Given style class names in array
   */
  @Input() classes: string[] = [];
  /**
   * Screen text to show, if the text will be given in the tag it will be set to `ng-content` first.
   * <logo-link>DISPLAY TEXT</logo-link> or <logo-link display='DISPLAY TEXT'></logo-link> are the same.
   */
  @Input() display: string = '';
  /**
   * Output to be triggered when hover on the element
   */
  @Output() onHover: EventEmitter<any> = new EventEmitter<any>();
  /**
   * Output to be triggered when mouse leave element
   */
  @Output() onLeave: EventEmitter<any> = new EventEmitter<any>();
  /**
   * All configuration can be given in this Link model.
   * [Link](/#/docs/components/link-module#link) - Makes focused to added element
   */
  @Input() link: Link;
  /**
   * Specifies a root URI to use for relative navigation. Default is false.
   * For example `this.router.navigate(['../list'], { relativeTo: this.route });`
   */
  @Input() relativeTo: boolean = false;

  constructor(@Inject(DOCUMENT) private document, private linkService: LinkService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.link) {
      this.external = this.link.external;
      this.fragment = this.link.fragment;
      this.classes = this.link.classes && [...this.classes, ...this.link.classes] || this.classes;
      this.display = this.link.display;
      this.redirection = this.link.redirection;
      this.relativeTo = ((typeof this.link.relativeTo === 'undefined' || !this.link.relativeTo) && !this.link.url) || this.link.relativeTo;
      this.url = this.link.url;
    }
    this.relativeTo = !this.relativeTo && !this.url || this.relativeTo;
    this.url = typeof this.url === 'undefined' && this.relativeTo ? '' : this.url;
  }

  onClickEvent($event, external: boolean = false) {
    if (this.redirection) {
      timer(this.delay).subscribe(() => {
        if (external) {
          this.document.location.href = `${this.url}${this.fragment ? `#${this.fragment}` : ``}`;
        } else {
          const relativeTo = this.relativeTo ? {relativeTo: this.activatedRoute} : {};
          const queryParams = this.params ? {queryParams: this.params} : {};
          const fragment = this.fragment ? {fragment: this.fragment} : {};
          const extras = {...fragment, ...queryParams, ...relativeTo};
          const url = Array.isArray(this.url) ? [...this.url] : [this.url];
          this.router.navigate(url, extras);
        }
      });
    }
    this.linkService.fragment = this.fragment;
  }

  onHoverEvent($event) {
    this.onHover.emit($event);
  }

  onLeaveEvent($event) {
    this.onLeave.emit($event);
  }
}
