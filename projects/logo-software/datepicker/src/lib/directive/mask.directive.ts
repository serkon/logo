/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

import * as momentNs from 'moment';
import { Util } from '../util/util';

const moment = momentNs;
let selectionStart: any;

export interface MaskConditions {
  cases: { position: number, regexp: string }[],
  placeholder: string
}

/**
 * An input mask is a string of characters that indicates the format of valid input values. You can help
 * people enter data correctly into input by providing input masks for fields that contain data that is
 * always formatted a certain way. For example, you can use an input mask to make
 * sure that people enter correctly formatted phone numbers into a phone number field.
 *
 * __Usage Example:__
 *
 * <input [(ngModel)]="tourDate" masker />
 *
 * For __Time__ correction example, this will be check for HH:mm format:
 *  ```html
 * <input
 *   masker
 *   [regexp]="'^[0-2]{1}$|^[0-2]{1}[0-9]{1}$|^[0-2]{1}[0-9]{1}[0-5]{1}$|^[0-2]{1}[0-9]{1}[0-5]{1}[0-9]{1}$'"
 *   [placeholder]="HH:mm"
 *  />
 *  ```
 * @stacked-example(MaskDirective, logo/core-sample/mask-directive-showcase/mask-directive-showcase.component)
 * For __Date__ correction example, this will be check for YYYY-MM-DD format:
 * ```html
 * <input
 *   masker
 *   [placeholder]="'YYYY-MM-DD'"
 *   [regexp]="'^\\d+$'"
 * />
 * ```
 *
 * Full usage example with contains conditions:
 *
 * ```html
 * <input
 *   masker
 *   [(ngModel)]="value"
 *   (change)="onDateChangeHandler($event)"
 *   (click)="onInputClick($event)"
 *   [placeholder]="'XX-00000'"
 *   [conditions]="[{cases: [{position: 2, regexp:'^[0-9]$'}], placeholder: 'X-0000000000'}]"
 *   [case]="'lower'"
 *   [regexp]="'^X{1,2}$|^X{1,2}[0-9]*$'"
 *   [maskType]="'date'"
 *   #dateRef
 * />
 * ```
 *
 * __Another Example:__
 * ```html
 * <input
 *   masker
 *   [placeholder]="'XX-0000000000'"
 *   [conditions]="[{cases: [{position: 2, regexp: '^[0-9]$'}], placeholder: 'X-0000000000'}]"
 *   [regexp]="'^[A-ZĞÜŞİÖÇ]{1,2}$|^[A-ZĞÜŞİÖÇ]{1,2}[0-9]*$'"
 *   [case]="'upper'"
 * />
 * ```
 */
@Directive({
  selector: '[masker]',
  providers: [NgModel],
})
export class MaskDirective implements OnInit {
  @Input() ngModel: string;
  /**
   *  This input set to date if will be use for date formatted
   */
  @Input() private maskType: string;
  /**
   * Case use for upper or lower case selection
   * For example [case]="'lower'" it makes all char to lowercase
   */
  @Input() private case: 'lower' | 'upper' | null = null; // "upper|lower"
  /**
   * Conditions uses for set special status different than defined placeholder.
   * If placeholder set to 'XX-00000' and 'X-00000' also acceptable you need this property
   * For example [conditions]="[{cases: [{position: 2, regexp:'^[0-9]$'}], placeholder: 'X-0000000000'}]"
   * With this at 2 position if inserted char is a digit (regexp) then placeholder will be redefine to 'X-0000000000'
   */
  @Input() private conditions: MaskConditions[] = [];
  @Output() private ngModelChange = new EventEmitter();
  private list: any[];
  private oldValue = '';
  private input: any;
  private defaultChars = '^\\wğüşıöçĞÜŞİÖÇ';
  private acceptedChars: string;

  constructor(private elementRef: ElementRef) {
  }

  private _regexp: string;

  /**
   * This propert removes inserted char if format not same with defined pattern.
   * For example [regexp]="'^9{1,3}$|^9{3}[0-9]*$'"
   * Above example just accepts beginning 999 then accept digits like 999123456
   */
  @Input() get regexp(): string {
    return this._regexp;
  }

  set regexp(value: string) {
    this._regexp = value;
  }

  private _placeholder: string;

  /**
   * Used for format check. What format will be used for display text.
   * if need some special chars like "- / or space" this will be looks their position
   * and will be added automatically
   * For example :  [placeholder] = {TK-1234} This format will be add "-" char automatically to third cursor position.
   * And also will restrict insert more than char length to textbox.
   */
  @Input() get placeholder(): string {
    return this._placeholder;
  }

  set placeholder(value: string) {
    this._placeholder = value;
    if (typeof value !== 'undefined' && this.input) {
      this.setPlaceholder(value);
    }
    if (!this.maxLength) {
      this.maxLength = this.placeholder.length;
    }
  }

  private _maxLength: number;

  /**
   * This property used for definition of acceptable max char length of the input field
   * For example, [maxLength]='13' it sets the input file's acceptable chars length to max 13
   */
  @Input() get maxLength(): number {
    return this._maxLength;
  }

  set maxLength(value: number) {
    const length = this.elementRef.nativeElement.maxLength;
    const maxLength = length ? length : this._placeholder.length;
    this._maxLength = (typeof value !== 'undefined' && value !== null) ? value : maxLength;
    if (value && this.input) {
      this.setInputAttributes();
    }
  }

  private _extendedChars: string;

  @Input() get extendedChars(): string {
    return this._extendedChars;
  }

  set extendedChars(value: string) {
    this._extendedChars = value;
    if (typeof value !== 'undefined' && this.input) {
      this.setPlaceholder(this.placeholder);
    }
  }

  ngOnInit() {
    this.input = this.elementRef.nativeElement;
    if (this._placeholder) {
      this.setPlaceholder(this._placeholder);
    }
  }

  setPlaceholder(placeholder: string) {
    let specialChars: RegExpMatchArray | null;
    this.acceptedChars = `[${this.defaultChars}${this._extendedChars}]`;
    specialChars = placeholder.match(new RegExp(this.acceptedChars, 'g'));
    this.list = specialChars && Util.union(specialChars).map((value: any) => {
      'use strict';
      return {what: value, position: Util.findAllIndex(placeholder.split(''), value)};
    });
    this.setInputAttributes();
  }

  setInputAttributes() {
    this.input.setAttribute('maxLength', this._maxLength);
    this.input.setAttribute('placeholder', this._placeholder);
  }

  clear(value: any) {
    return value.replace(new RegExp(this.acceptedChars, 'g'), ''); // Removes every non-digit character;
  }

  isValid(value: any) {
    const convertDate = new Date(value);
    return Object.prototype.toString.call(convertDate) === '[object Date]' && !isNaN(convertDate.getTime());
  }

  @HostListener('focus', ['$event'])
  onFocus($event: KeyboardEvent) {
    this.oldValue = this.input.value;
  }

  @HostListener('blur', ['$event'])
  onBlur($event: KeyboardEvent) {
    if (this.maskType === 'date' && !this.isValid(this.input.value)) {
      this.emit(this.oldValue);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown($event: KeyboardEvent) {
    selectionStart = this.input.selectionStart;
    if ($event.keyCode === 13) {
      if (this.maskType === 'date' && !this.isValid(this.input.value)) {
        this.emit(this.oldValue);
      }
    }
  }

  emit(value: any) {
    this.input.value = value;
    this.oldValue = value;
    this.ngModelChange.emit(value);
  }

  conditionCheck() {
    const clear = this.clear(this.input.value);
    if (this.conditions.length > 0) {
      this.conditions.forEach(condition => {
        const status = condition.cases.every(item => {
          if (clear[item.position - 1]) {
            const isTrue = new RegExp(item.regexp, 'gi').test(clear[item.position - 1]);
            selectionStart = isTrue ? selectionStart + 1 : selectionStart;
            return isTrue;
          }
          return false;
        });
        const placehoder = status ? condition.placeholder : this._placeholder;
        this.setPlaceholder(placehoder);
      });
    }
  }

  mask(value: any) {
    const clear = this.clear(value);
    return clear.replace(/./g, (val: any, index: any) => {
      let specialChar = 0;
      if (this.list) {
        this.list.forEach(item => {
          'use strict';
          item.position.forEach((position: any) => {
            val = (index === (position - 1 - specialChar)) ? val + item.what : val;
            specialChar++;
          });
        });
      }
      return val;
    });
  }

  @HostListener('input', ['$event'])
  onInput($event: any) {
    let value;
    let newValue;
    switch (this.case) {
      case 'lower':
        value = Util.turkishToLower(this.input.value);
        break;
      case 'upper':
        value = Util.turkishToUpper(this.input.value);
        break;
      default:
        value = this.input.value;
        break;
    }
    const isTrue = new RegExp(this._regexp).test(this.clear(value));
    const insertedCharLength = this.input.selectionEnd - selectionStart;
    if (!isTrue) {
      $event.preventDefault();
      this.emit(Util.removeCharsBetween(value, selectionStart, insertedCharLength));
      this.input.setSelectionRange(selectionStart, selectionStart);
      return;
    }
    if ($event.data || $event.inputType === 'insertFromPaste') {
      this.conditionCheck();
      newValue = this.mask(value);
      if (this.maskType === 'date' && !moment(newValue).isValid() && this._maxLength === this.input.value) {
        this.emit(this.oldValue);
      } else {
        this.emit(newValue);
      }
      if (this.input.value.length !== this._maxLength) {
        if (this.list) {
          this.list.map(item => item.position).join().split(',').map(item => {
            if (Number(item) >= selectionStart + 1 && selectionStart + insertedCharLength >= Number(item)) {
              selectionStart = selectionStart + 1;
            }
          });
        }
        this.input.setSelectionRange(selectionStart + insertedCharLength, selectionStart + insertedCharLength);
      }
    }
  }
}
