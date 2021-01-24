import { ContentChildren, Directive, QueryList } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@Directive({
  selector: '[check]',
})
export class CheckLinkDirective {
  @ContentChildren(RouterLink, {descendants: true}) links: QueryList<RouterLink>;
  @ContentChildren(RouterLinkWithHref, {descendants: true})
  linksWithHrefs: QueryList<RouterLinkWithHref>;
}
