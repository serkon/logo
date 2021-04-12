import * as moment from 'moment';
import 'moment/locale/tr';

moment.locale('tr');

export class DatepickerMeta {
  public weekdays: string[];
  public days: any[number] | null;
  public day = {value: this.date.date(), name: moment.weekdays(this.date.day())};
  public month = {index: this.date.month(), value: this.date.month(), name: moment.months(this.date.month())};
  public months: any[] = moment.months();
  public year = this.date.year();
  public previousMonth: moment.Moment = moment(this.date).subtract(1, 'months');
  public nextMonth: moment.Moment = moment(this.date).add(1, 'months');
  public currentMonth: moment.Moment = moment(this.date);
  public currentYear: moment.Moment = moment(this.date);
  public firstEmptyDays: any[] | null;
  public lastEmptyDays: any[] | null;

  constructor(private date: moment.Moment) {
    const weekdays: any[] = moment.weekdays();
    weekdays.push(weekdays.shift());
    this.weekdays = weekdays.map((item) => item.substring(0, 3));
    this.days = this.range(this.date.daysInMonth());
    this.firstDayCalculate();
    this.lastDayCalculate();
  }

  firstDayCalculate() {
    const prevMonthDays = this.previousMonth.daysInMonth();
    const emptyDay = moment(this.date).startOf('month').day();
    this.firstEmptyDays = this.range(emptyDay > 0 ? emptyDay - 1 : 6, emptyDay > 0 ? prevMonthDays - emptyDay + 2 : prevMonthDays - 5);
  }

  lastDayCalculate() {
    this.lastEmptyDays = this.range(7 - moment(this.date).endOf('month').days(), 1);
  }

  range(count = 0, start = 0): number[] {
    const boost = (u, i) => start + i;
    return [...Array(count)].map(boost);
  }
}
