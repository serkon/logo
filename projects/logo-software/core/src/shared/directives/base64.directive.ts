import { ChangeDetectorRef, Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';


/**
 * Base64 string converter: if base64 string was given, it will automatically
 * emit decoded string otherwise it will emit encoded string
 *
 * __Usage Example:__
 *
 * ```html
 * <span [(b64)]="base64String">{{base64String}}</span>
 * ```
 */
@Directive({selector: '[b64]'})
export class Base64Directive implements OnInit {
  @Output() b64Change: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cd: ChangeDetectorRef) {
  }

  private _b64: string = null;

  @Input() get b64() {
    return this._b64;
  }

  set b64(text: string) {
    this._b64 = (text && !this.isBase64(text)) ? this.encode(text) : this.decode(text);
    this.b64Change.emit(text);
  }

  ngOnInit() {
    this.cd.detectChanges();
  }

  isBase64(value: string) {
    const regexp = new RegExp(/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/);
    return regexp.test(value);
  }

  encode(value: string) {
    return btoa(value);
  }

  decode(value: string) {
    return atob(value);
  }
}
