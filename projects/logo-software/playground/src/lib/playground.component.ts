import { AfterViewInit, Component, Inject, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

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
    this.document.defaultView.open(this.document.defaultView.location.origin + '/' + this.path.changingThisBreaksApplicationSecurity, '_blank');
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
