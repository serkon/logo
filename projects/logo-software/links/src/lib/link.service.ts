import { Inject, Injectable } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  fragment;
  subscription = null;

  constructor(@Inject(DOCUMENT) private document, private router: Router) {
    this.subscription = this.router.events
      .subscribe(event => {
        if (event instanceof Scroll && !!event.anchor) {
          this.scrollToAnchor(this.fragment);
        }
      });
  }

  scrollToAnchor(fragment) {
    if (this.fragment) {
      const anc = document.getElementById(fragment);
      anc && window.setTimeout(() => anc.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }), 100);
    }
  }
}
