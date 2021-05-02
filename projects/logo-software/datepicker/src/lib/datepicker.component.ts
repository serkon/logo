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
   * If there is more than one datepicker on same page and these pickers are related, you can use reference option to make a relations.
   */
  @Input() public reference: DatepickerComponent | null = null;
  /**
   * Placeholder of the datepicker
   */
  @Input() public placeholder = config.placeholder.format;
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
  public month: moment.Moment = moment(this.ngModel, this.placeholder);
  public year: moment.Moment = moment(this.ngModel, this.placeholder);

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
  @Input() cssClasses: string;
  @ViewChild('dateRef') dateRef: ElementRef;
  @ViewChild('timeRef') timeRef: ElementRef;
  @Output() ngModelChange: EventEmitter<Date> = new EventEmitter<Date>();
  /**
   * Value change output of the datepicker
   */
  @Output() public onChange: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() public closed: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isPopupActive = false;
  public meta: DatepickerMeta;
  public timeValue: string;
  public diff: string;
  /**
   * Show calendar in month view format
   */
  public selectDate: boolean = true;
  /**
   * Show calendar in year view format
   */
  public selectMonth: boolean = false;
  private initialized: boolean = false;

  constructor(private _elementRef: ElementRef, private renderer: Renderer2) {
  }

  private _calendarDiv: ElementRef;

  get calendarDiv() {
    return this._calendarDiv;
  }

  @ViewChild('calendar', {static: false, read: ElementRef}) set calendarDiv(elementRef: ElementRef) {
    this._calendarDiv = elementRef;
    if (!elementRef) {
      this.closePopOver();
    }
  };

  private _ngModel = moment();

  get ngModel() {
    return this._ngModel;
  }

  /**
   * Pre-set value of the datepicker if needed
   */
  @Input() set ngModel(val) {
    this._ngModel = moment(val, this.placeholder);
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
    this.month = moment(this.ngModel, this.placeholder);
    this.year = moment(this.ngModel, this.placeholder);
    this.meta = new DatepickerMeta(this.month);
    const diffDuration: moment.Duration = moment.duration(this.ngModel.diff(moment(this.target, this.placeholder)));
    this.setDiffTimeString(diffDuration);
    this.time ? this.timeValue = moment(this.ngModel).format(this.timeFormat) : '';
    this.initialized = true;
  }

  closePopOver() {
    this.isPopupActive = false;
    this.closed.emit(true);
    this.setDayView();
  }

  /**
   * Date change handler
   * @param $event
   */
  onDateChangeHandler($event: Event) {
    const htmlInput = $event.target as HTMLInputElement;
    const date = moment(htmlInput.value, this.placeholder);
    this.emit(date);
    this.dateRef.nativeElement.value = this.ngModel.format(this.placeholder);
    this.closePopOver();
  }

  emit(date: moment.Moment) {
    const formatted = this.checkMinMaxValidDate(date);
    this.ngModel = formatted;
    this.ngModelChange.emit(this.ngModel.toDate());
    this.onChange.emit(this.ngModel.toDate());
    this.timeValue = formatted.format(this.timeFormat);
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
    this.setDayView();
  }

  checkDisable(day: number, whichMonth: moment.Moment) {
    const date: moment.Moment = this.calculateClickedButtonDay(day, whichMonth);
    return this.min && date.diff(moment(this.min, this.placeholder)) < 0 || this.max && date.diff(moment(this.max, this.placeholder)) > 0;
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
    const target = moment(this.target, this.placeholder);
    const date: moment.Moment = this.calculateClickedButtonDay(day, whichMonth);
    const className = [];
    if (date.format(this.placeholder) === this.ngModel.format(this.placeholder)) {
      className.push(config.css.current);
    }
    if (this.target !== null && typeof (this.target)) {
      if ((date.diff(target) <= 0 && date.diff(this.ngModel) >= 0) || (date.diff(target) >= 0 && date.diff(this.ngModel) <= 0)) {
        className.push(config.css.selected);
      }
    }
    if (date.isSame(moment(), 'day')) { // if (date.format(this.placeholder) === moment().format(this.placeholder)) {
      className.push(config.css.today);
    }
    if (
      (date.diff(target) >= 0 && date.format(config.day.format) === this.ngModel.format(config.day.format)) ||
      (date.format(config.day.format) === target.format(config.day.format) && date.diff(this.ngModel) >= 0)
    ) {
      className.push(config.css.last);
    }
    if (
      (date.diff(target) <= 0 && date.format(config.day.format) === this.ngModel.format(config.day.format)) ||
      (date.format(config.day.format) === target.format(config.day.format) && date.diff(this.ngModel) <= 0)
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
      date = this.ngModel;
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
    this.emit(date);
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
    this.meta = new DatepickerMeta(this.ngModel);
  }

  setMonthView() {
    this.selectDate = false;
    this.selectMonth = true;
  }

  setDayView() {
    this.selectDate = true;
    this.selectMonth = false;
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
