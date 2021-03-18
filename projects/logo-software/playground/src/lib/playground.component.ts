/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { AfterViewInit, Component, Inject, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

/**
 * This component opens the given URL inside the iframe display its content in a sandbox container.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-playground
 *   context='{"title": "Accordion Demo", "button": true}'
 *   height="400px"
 *   path="example/logo/accordion-sample/accordion-showcase/accordion-showcase.component"
 * >
 * </logo-playground>
 * ```
 */
@Component({
  selector: 'logo-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements AfterViewInit {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(@Inject(DOCUMENT) private document, private sanitize: DomSanitizer, private router: Router, private route: ActivatedRoute) {
  }

  private _height: string = '350px';

  get height(): string {
    return this._height;
  }

  @Input() set height(value: string) {
    this._height = value;
  }

  private _context;

  get context() {
    return this._context;
  }

  @Input() set context(value) {
    let val = {title: '', button: false};
    try {
      val = JSON.parse(value);
    } finally {
      this._context = val;
    }
  }

  private _path;

  get path() {
    return this._path;
  }

  @Input() set path(value) {
    this._path = this.sanitize.bypassSecurityTrustResourceUrl(value);
  }

  tab() {
    this.document.defaultView.open(this.path.changingThisBreaksApplicationSecurity, '_blank');
    // this.document.defaultView.open(this.document.defaultView.location.origin + '/' + this.path.changingThisBreaksApplicationSecurity, '_blank');
    // this.windowRef.location.href = this.windowRef.location.origin + '/' + this.path;
  }

  code() {
    console.log('@TODO add code view over http request to ');
  }

  ngAfterViewInit() {
    // @TODO redirection comes to here
    // this.router.navigate([`${this.path}`]);
  }

}
