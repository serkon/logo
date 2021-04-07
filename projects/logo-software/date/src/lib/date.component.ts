import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/tr';

import { DateMeta } from './date.meta';

const config = {
  t: 'months',
  placeholder: {
    format: 'YYYY-MM-DD HH:mm',
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
    format: 'YYYY-MM-DD',
  },
  css: {
    current: 'current',
    today: 'today',
    selected: 'selected',
    last: 'last',
    first: 'first',
  },
};

@Component({
  selector: 'logo-date',
  templateUrl: 'date.component.html',
  styleUrls: ['date.component.scss'],
  host: {class: 'app-calendar-host'},
})
export class DateComponent implements OnInit, OnChanges {
  @Input() public reference: DateComponent | null = null;
  @Input() public placeholder = config.placeholder.format;
  @Input() public regexp = config.regexp.format;
  @Input() public disabled = false;
  @Input() public time = true;
  @Input() public value: string = moment().format(this.placeholder);
  @Output() public valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() public min: string;
  @Input() public max: string;
  @Input() public target: string;
  @Input() timeFormat = config.placeholder.time;
  @ViewChild('calendar') calendarDiv: ElementRef;
  @ViewChild('dateRef') dateRef: ElementRef;
  @ViewChild('timeRef') timeRef: ElementRef;
  public meta: DateMeta;
  public timeValue: string;
  public hidden = true;
  public month: moment.Moment = moment(this.value, this.placeholder);
  public selected: moment.Moment = moment(this.value, this.placeholder);
  public diff: string;
  public selectStatus = false;

  constructor(private _elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement) {
    if (!this.disabled) {
      if (!this.selectStatus) {
        this.hidden = !this._elementRef.nativeElement.contains(targetElement);
      }
    }
    this.selectStatus = false;
  }

  ngOnInit() {
    this.initialize();
  }

  ngOnChanges(change: SimpleChanges) {
    this.initialize();
  }

  initialize() {
    this.selected = moment(this.value, this.placeholder);
    this.month = moment(this.value, this.placeholder);
    this.meta = new DateMeta(this.month);
    const diffDuration: moment.Duration = moment.duration(this.selected.diff(moment(this.target, this.placeholder)));
    this.setDiffTimeString(diffDuration);
    this.timeValue = moment(this.value).format(this.timeFormat);
  }

  onDayClick(day: number, whichMonth: moment.Moment) {
    this.hidden = true;
    this.selectStatus = true;
    this.valueChange.emit(this.calculateClickedButtonDay(day, whichMonth).format(this.placeholder));
    if (!!this.reference && this.hidden) {
      this.reference.selectStatus = true;
      this.reference.hidden = false;
    }
  }

  checkDisable(day: number, whichMonth: moment.Moment) {
    const date: moment.Moment = this.calculateClickedButtonDay(day, whichMonth);
    return this.min && date.diff(moment(this.min, this.placeholder)) < 0 || this.max && date.diff(moment(this.max, this.placeholder)) > 0;
  }

  setDiffTimeString(diffDuration: any) {
    const string = [];
    const abs = (value: number, period: string) => {
      return `${Math.abs(value)} ${period}`;
    };
    if (!!diffDuration._data.years) {
      string.push(abs(diffDuration._data.years, this.translate(config.definitions.year)));
    }
    if (!!diffDuration._data.months) {
      string.push(abs(diffDuration._data.months, this.translate(config.definitions.month)));
    }
    if (!!diffDuration._data.days) {
      string.push(abs(diffDuration._data.days, this.translate(config.definitions.day)));
    }
    if (!!diffDuration._data.hours) {
      string.push(abs(diffDuration._data.hours, this.translate(config.definitions.hour)));
    }
    if (!!diffDuration._data.minutes) {
      string.push(abs(diffDuration._data.minutes, this.translate(config.definitions.minute)));
    }
    if (!!diffDuration._data.seconds) {
      string.push(abs(diffDuration._data.seconds, this.translate(config.definitions.second)));
    }
    this.diff = string.join(config.space);
  }

  setClass(day: number, whichMonth: moment.Moment) {
    const target = moment(this.target, this.placeholder);
    const date: moment.Moment = this.calculateClickedButtonDay(day, whichMonth);
    const className = [];
    if (date.format(this.placeholder) === this.selected.format(this.placeholder)) {
      className.push(config.css.current);
    }
    if (this.target !== null && typeof (this.target)) {
      if ((date.diff(target) <= 0 && date.diff(this.selected) >= 0) || (date.diff(target) >= 0 && date.diff(this.selected) <= 0)) {
        className.push(config.css.selected);
      }
    }
    if (date.isSame(moment(), 'day')) { // if (date.format(this.placeholder) === moment().format(this.placeholder)) {
      className.push(config.css.today);
    }
    if (
      (date.diff(target) >= 0 && date.format(config.day.format) === this.selected.format(config.day.format)) ||
      (date.format(config.day.format) === target.format(config.day.format) && date.diff(this.selected) >= 0)
    ) {
      className.push(config.css.last);
    }
    if (
      (date.diff(target) <= 0 && date.format(config.day.format) === this.selected.format(config.day.format)) ||
      (date.format(config.day.format) === target.format(config.day.format) && date.diff(this.selected) <= 0)
    ) {
      className.push(config.css.first);
    }
    return className;
  }

  calculateClickedButtonDay(day: number, whichMonth: moment.Moment): moment.Moment {
    const date = moment([whichMonth.year(), whichMonth.month(), day + 1]);
    return this.time ? date.set(this.setTime(this.timeValue)) : date;
  }

  getPrevMonth() {
    return new DateMeta(moment(this.month).subtract(1, config.definitions.months as any));
  }

  getNextMonth() {
    return new DateMeta(moment(this.month).add(1, config.definitions.months as any));
  }

  setPrevMonth() {
    this.meta = this.getPrevMonth();
    this.month = this.meta.currentMonth;
  }

  setNextMonth() {
    this.meta = this.getNextMonth();
    this.month = this.meta.currentMonth;
  }

  checkMinMaxValidDate(date: moment.Moment) {
    if (!moment(date).isValid()) {
      date = this.selected;
    } else if (this.min && date.diff(moment(this.min)) < 0) {
      date = moment(this.min);
    } else if (this.max && date.diff(moment(this.max)) > 0) {
      date = moment(this.max);
    }
    return date;
  }

  emit(date: moment.Moment) {
    const formatted = this.checkMinMaxValidDate(date);
    this.value = formatted.format(this.placeholder);
    this.valueChange.emit(this.value);
    this.timeValue = formatted.format(this.timeFormat);
  }

  onDateChangeHandler($event: Event) {
    const htmlInput = $event.target as HTMLInputElement;
    const date = moment(htmlInput.value);
    this.emit(date);
  }

  onTimeChangeHandler($event: Event) {
    const date = moment(this.value).set(this.setTime(this.timeValue));
    this.emit(date);
  }

  setTime(time: string) {
    const timeStr = moment(time, this.timeFormat);
    return {
      hour: timeStr.get(config.definitions.hour as any),
      minute: timeStr.get(config.definitions.minute as any),
      second: timeStr.get(config.definitions.second as any),
    };
  }

  goToToday() {
    this.meta = new DateMeta(moment());
  }

  goToSelected() {
    this.meta = new DateMeta(this.selected);
  }

  translate(value: string) {
    return value;
  }
}
