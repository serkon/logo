/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */
import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/tr';

import { DatepickerMeta } from './datepicker-meta.model';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

moment.locale('tr');

const config = {
  placeholder: {
    format: 'DD.MM.YYYY',
    text: 'placeholder',
    time: 'HH:mm',
  },
  regexp: {
    text: 'regexp',
    format: '^\\d+$',
  },
  space: ' ',
  definitions: {
    year: 'year',
    month: 'month',
    day: 'day',
    hour: 'hour',
    minute: 'minute',
    second: 'second',
    months: 'months',
  },
  day: {
    format: 'DD.MM.YYYY',
  },
  css: {
    current: 'current',
    today: 'today',
    selected: 'selected',
    last: 'last',
    first: 'first',
  },
};

/**
 * The DatePicker components itself. Provides a proxy to customize logo datepicker library options.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-datepicker
 *  [reference]="'mySecondDatepickerForRange'"
 *  [placeholder]="'Placeholder of my logo datepicker'"
 *  [regexp]="regexp"
 *  [disabled]="false"
 *  [time]="true"
 *  [value]="10.01.2021"
 *  [min]="10.01.2000"
 *  [max]="10.01.2099"
 *  [target]="'mySecondDatepickerForRange'"
 *  [iconPosition]="'left'"
 *  [size]="'medium'"
 *  [cssClasses]="'my-own-datepicker-class'"
 *  (valueChange)="yourChangeTrigger($event)"
 * >
 * </logo-datepicker>
 * ```
 */
@Component({
  selector: 'logo-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatepickerComponent),
    multi: true,
  }],
})
export class DatepickerComponent implements OnInit, OnChanges {
  /**
   * Placeholder empty state display text
   */
  @Input() public placeholder: string = 'Select Date';
  /**
   * If there is more than one datepicker on same page and these pickers are related, you can use reference option to make a relations.
   */
  @Input() public reference: DatepickerComponent | null = null;
  /**
   * Placeholder format of the datepicker
   */
  @Input() public formatter = config.placeholder.format;
  /**
   * Datepicker input regexp to for masking
   */
  @Input() public regexp = config.regexp.format;
  /**
   * Disable or enable datepicker
   */
  @Input() public disabled = false;
  /**
   * Show time option for datepicker in 24-hours format.
   */
  @Input() public time = true;
  public date: moment.Moment = moment();
  public month: moment.Moment = moment(this.ngModel, this.formatter);
  public year: moment.Moment = moment(this.ngModel, this.formatter);

  /**
   * Min value of the datepicker
   */
  @Input() public min: string;
  /**
   * Max value of the datepicker
   */
  @Input() public max: string;
  /**
   * For range option, targeted datepicker input
   */
  @Input() public target: string;
  /**
   * Time format of the time option. It will be HH:mm or HH:mm:ss
   */
  @Input() timeFormat = config.placeholder.time;
  /**
   * Calendar icon position of the picker
   */
  @Input() iconPosition: string = 'left';
  /**
   * Size of datepicker
   */
  @Input() size: string = 'medium';
  /**
   * Your own CSS Class for the datepicker
   */
  @Input() classes: string;
  @ViewChild('dateRef') dateRef: ElementRef;
  @ViewChild('timeRef') timeRef: ElementRef;
  @Output() ngModelChange: EventEmitter<Date> = new EventEmitter<Date>();
  /**
   * Value change output of the datepicker
   */
  @Output() public onChange: EventEmitter<Date> = new EventEmitter<Date>();
  /**
   * Trigger an event when popover closed
   */
  @Output() public onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isPopupActive = false;
  public meta: DatepickerMeta;
  public timeValue: string;
  public diff: string;
  private initialized: boolean = false;
  private _calenderActivated = false;
  private _setViewFormatToMonth: boolean = false;
  private _setViewFormatToDay: boolean = true;
  private _calendarDiv: ElementRef;
  private _ngModel = null;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this._calenderActivated) {
      this.closePopOver();
    }
  }

  constructor(private _elementRef: ElementRef, private renderer: Renderer2) {
  }

  get setViewFormatToMonth() {
    return this._setViewFormatToMonth;
  }

  /**
   * Show calendar in month view format
   */
  @Input() set setViewFormatToMonth(value: boolean) {
    this._setViewFormatToMonth = value;
    if (value) {
      this.setViewFormatToDay = false;
    }
  }

  get setViewFormatToDay() {
    return this._setViewFormatToDay;
  }

  /**
   * Show calendar in day view format
   */
  @Input() set setViewFormatToDay(value: boolean) {
    this._setViewFormatToDay = value;
    if (value) {
      this.setViewFormatToMonth = false;
    }
  }

  get calendarDiv() {
    return this._calendarDiv;
  }

  @ViewChild('calendar', {static: false, read: ElementRef}) set calendarDiv(elementRef: ElementRef) {
    this._calendarDiv = elementRef;
    if (elementRef) {
      this._calenderActivated = true;
    }
    if (this._calenderActivated && !elementRef) {
      this.closePopOver();
    }
  };

  get ngModel() {
    return this._ngModel;
  }

  /**
   * Pre-set value of the datepicker if needed
   */
  @Input() set ngModel(val) {
    if (val && moment(val).isValid()) {
      this._ngModel = moment(val, this.formatter);
      this.date = this.ngModel;
    } else {
      this._ngModel = null;
    }
  };

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement) {
    if (!this.disabled) {
      this.isPopupActive = this._elementRef.nativeElement.contains(targetElement);
    }
  }

  ngOnInit(): void {
    !this.initialized ? this.initialize() : '';
  }

  ngOnChanges(change: SimpleChanges) {
    !this.initialized ? this.initialize() : '';
  }

  initialize() {
    if (this.date) {
      this.month = moment(this.date, this.formatter);
      this.year = moment(this.date, this.formatter);
      this.meta = new DatepickerMeta(this.month);
      const diffDuration: moment.Duration = moment.duration(this.date.diff(moment(this.target, this.formatter)));
      this.setDiffTimeString(diffDuration);
      this.time ? this.timeValue = moment(this.date).format(this.timeFormat) : '';
      this.initialized = true;
    }
  }

  closePopOver() {
    this.isPopupActive = false;
    this.onClose.emit(true);
    this.setViewFormatToDay = true;
  }

  /**
   * Date change handler
   * @param $event
   */
  onDateChangeHandler($event: Event) {
    const htmlInput = $event.target as HTMLInputElement;
    const date = moment(htmlInput.value, this.formatter);
    this.manuelChange(date);
    this.dateRef.nativeElement.value = this.ngModel ? this.ngModel.format(this.formatter) : '';
    // this.isPopupActive = false;
  }

  manuelChange(date: moment.Moment) {
    this.ngModel = this.checkMinMaxValidDate(date);
    this.ngModelChange.emit(this.ngModel ? this.ngModel.toDate() : this.ngModel);
    this.onChange.emit(this.ngModel ? this.ngModel.toDate() : this.ngModel);
    this.timeValue = this.ngModel ? this.ngModel.format(this.timeFormat) : this.date.format(this.timeFormat);
  }

  onDayClick(day: number, whichMonth: moment.Moment) {
    this.isPopupActive = false;
    this.ngModel = this.calculateClickedButtonDay(day, whichMonth);
    this.ngModelChange.emit(new Date(this.ngModel.toDate()));
    this.onChange.emit(this.calculateClickedButtonDay(day, whichMonth).toDate());
    if (!!this.reference && !this.isPopupActive) {
      this.reference.isPopupActive = true;
    }
    this.setClass(day, whichMonth);
  }

  onMonthClick(month: number, whichYear: moment.Moment) {
    this.meta = new DatepickerMeta(whichYear);
    this.year = this.meta.currentYear;
    const monthMeta = new DatepickerMeta(whichYear.set({'month': month}))
    this.month = monthMeta.currentMonth;
    this.meta.currentMonth = monthMeta.currentMonth;
    this.meta.month = {index: month, value: month, name: moment.months(month)};
    this.meta.days = this.meta.range(whichYear.daysInMonth());
    this.setViewFormatToDay = true;
  }

  checkDisable(day: number, whichMonth: moment.Moment) {
    const date: moment.Moment = this.calculateClickedButtonDay(day, whichMonth);
    return this.min && date.diff(moment(this.min, this.formatter)) < 0 || this.max && date.diff(moment(this.max, this.formatter)) > 0;
  }

  /**
   * Set the diff or time
   * @param diffDuration
   */
  setDiffTimeString(diffDuration: any) {
    const string = [];
    const abs = (value: number, period: string) => {
      return `${Math.abs(value)} ${period}`;
    };
    if (!!diffDuration._data.years) {
      string.push(abs(diffDuration._data.years, config.definitions.year));
    }
    if (!!diffDuration._data.months) {
      string.push(abs(diffDuration._data.months, config.definitions.month));
    }
    if (!!diffDuration._data.days) {
      string.push(abs(diffDuration._data.days, config.definitions.day));
    }
    if (!!diffDuration._data.hours) {
      string.push(abs(diffDuration._data.hours, config.definitions.hour));
    }
    if (!!diffDuration._data.minutes) {
      string.push(abs(diffDuration._data.minutes, config.definitions.minute));
    }
    if (!!diffDuration._data.seconds) {
      string.push(abs(diffDuration._data.seconds, config.definitions.second));
    }
    this.diff = string.join(config.space);
  }

  /**
   * Set classes of the dates
   * @param day
   * @param whichMonth
   */
  setClass(day: number, whichMonth: moment.Moment) {
    const target = moment(this.target, this.formatter);
    const date: moment.Moment = this.calculateClickedButtonDay(day, whichMonth);
    const className = [];
    if (date.format(this.formatter) === this.date.format(this.formatter)) {
      className.push(config.css.current);
    }
    if (this.target !== null && typeof (this.target)) {
      if ((date.diff(target) <= 0 && date.diff(this.date) >= 0) || (date.diff(target) >= 0 && date.diff(this.date) <= 0)) {
        className.push(config.css.selected);
      }
    }
    if (date.isSame(moment(), 'day')) { // if (date.format(this.placeholder) === moment().format(this.placeholder)) {
      className.push(config.css.today);
    }
    if (
      (date.diff(target) >= 0 && date.format(config.day.format) === this.date.format(config.day.format)) ||
      (date.format(config.day.format) === target.format(config.day.format) && date.diff(this.date) >= 0)
    ) {
      className.push(config.css.last);
    }
    if (
      (date.diff(target) <= 0 && date.format(config.day.format) === this.date.format(config.day.format)) ||
      (date.format(config.day.format) === target.format(config.day.format) && date.diff(this.date) <= 0)
    ) {
      className.push(config.css.first);
    }
    return className;
  }

  calculateClickedButtonDay(day: number, whichMonth: moment.Moment): moment.Moment {
    const date = moment([whichMonth.year(), whichMonth.month(), day + 1]);
    return this.time ? date.set(this.setTime(this.timeValue)) : date;
  }

  /**
   * Get previous ten years
   */
  getPrevTenYears() {
    return new DatepickerMeta(moment(this.year).subtract(10, config.definitions.year as any));
  }

  /**
   * Get previous year
   */
  getPrevYear() {
    return new DatepickerMeta(moment(this.year).subtract(1, config.definitions.year as any));
  }

  /**
   * Get previous month
   */
  getPrevMonth() {
    return new DatepickerMeta(moment(this.month).subtract(1, config.definitions.months as any));
  }

  /**
   * Get next month
   */
  getNextMonth() {
    return new DatepickerMeta(moment(this.month).add(1, config.definitions.months as any));
  }

  /**
   * Get next year
   */
  getNextYear() {
    return new DatepickerMeta(moment(this.year).add(1, config.definitions.year as any));
  }

  /**
   * Get next ten years
   */
  getNextTenYears() {
    return new DatepickerMeta(moment(this.year).add(10, config.definitions.year as any));
  }

  /**
   * Set previous month
   */
  setPrevMonth() {
    this.meta = this.getPrevMonth();
    this.month = this.meta.currentMonth;
  }

  setPrevTenYears() {
    this.meta = this.getPrevTenYears();
    this.year = this.meta.currentYear;
  }

  /**
   * Set previous year
   */
  setPrevYear() {
    this.meta = this.getPrevYear();
    this.year = this.meta.currentYear;
  }

  /**
   * Set next month
   */
  setNextMonth() {
    this.meta = this.getNextMonth();
    this.month = this.meta.currentMonth;
  }

  /**
   * Set next year
   */
  setNextYear() {
    this.meta = this.getNextYear();
    this.year = this.meta.currentYear;
  }

  setNextTenYears() {
    this.meta = this.getNextTenYears();
    this.year = this.meta.currentYear;
  }

  checkMinMaxValidDate(date: moment.Moment) {
    if (!moment(date).isValid()) {
      date = null;
    } else if (this.min && date.diff(moment(this.min)) < 0) {
      date = moment(this.min);
    } else if (this.max && date.diff(moment(this.max)) > 0) {
      date = moment(this.max);
    }
    return date;
  }

  /**
   * Time change handler
   * @param $event
   */
  onTimeChangeHandler($event: Event) {
    const date = moment(this.ngModel).set(this.setTime(this.timeValue));
    this.manuelChange(date);
  }

  /**
   * Set Time
   * @param time
   */
  setTime(time: string) {
    const timeStr = moment(time, this.timeFormat);
    return {
      hour: timeStr.get(config.definitions.hour as any),
      minute: timeStr.get(config.definitions.minute as any),
      second: timeStr.get(config.definitions.second as any),
    };
  }

  /**
   * Go to today
   */
  goToToday() {
    this.meta = new DatepickerMeta(moment());
  }

  /**
   * Go to selected day
   */
  goToSelected() {
    this.meta = new DatepickerMeta(this.date);
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }
}
