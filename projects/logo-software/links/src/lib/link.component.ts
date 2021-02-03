import { Component, Inject, Input, OnInit } from '@angular/core';
import { Link } from './link';
import { DOCUMENT } from '@angular/common';

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
      <button routerLink="{{url}}" [fragment]="fragment" [ngClass]="classes" (click)="onClickEvent($event, false)">
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
  @Input() url: string;
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
   * event to be triggered when clicked
   */
  @Input() onClick: (event: Event) => void;
  /**
   * All configuration can be given in this Link model.
   * [Link](/#/docs/components/link-module#link) - Makes focused to added element
   */
  @Input() link: Link;

  constructor(@Inject(DOCUMENT) private document) {
  }

  ngOnInit() {
    if (this.link) {
      this.external = this.link.external;
      this.fragment = this.link.fragment;
      this.url = this.link.url;
      this.classes = this.link.classes && [...this.classes, ...this.link.classes] || this.classes;
      this.display = this.link.display;
      this.onClick = this.link.onClick;
    }
  }

  scrollToAnchor() {
    if (this.fragment) {
      const anc = document.getElementById(this.fragment);
      anc && window.setTimeout(() => anc.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }), 100);
    }
  }

  onClickEvent($event, external: boolean = false) {
    if (external) {
      this.document.location.href = `${this.url}${this.fragment ? `#${this.fragment}`: ``}`;
    }
    this.scrollToAnchor();
    this.onClick && this.onClick($event);
  }
}
