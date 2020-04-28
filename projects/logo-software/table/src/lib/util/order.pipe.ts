import { Pipe, PipeTransform } from '@angular/core';
import { Util } from './util';

/**
 * Example use
 * Basic Array of single type: *ngFor="let todo of todoService.todos | orderBy : '-'"
 * Multidimensional sort on single column: *ngFor="let todo of todoService.todos | orderBy : ['-status']"
 * Multidimensional sort on multiple columns: ngFor="let todo of todoService.todos | orderBy : ['status', '-title']"
 */
@Pipe({name: 'orderBy', pure: false})
export class OrderPipe implements PipeTransform {
  private fields: any;

  static comparator(a: any, b: any): number {
    a = !!a ? a : 0;
    b = !!b ? b : 0;
    const parsedA = parseFloat(a);
    const parsedB = parseFloat(b);
    if ((isNaN(parsedA) || !isFinite(a)) || (isNaN(parsedB) || !isFinite(b))) {
      const lowerA = Util.convertToEnglishLetters(a); // a.toLowerCase();
      const lowerB = Util.convertToEnglishLetters(b); // b.toLowerCase();
      if (lowerA < lowerB) { // Isn't a number so lowercase the string to properly compare
        return -1;
      }
      if (lowerA > lowerB) {
        return 1;
      }
    } else {
      if (parsedA < parsedB) { // Parse strings as numbers to compare properly
        return -1;
      }
      if (parsedA > parsedB) {
        return 1;
      }
    }
    return 0; // equal each other
  }

  getElement(list: any) {
    let temp: any[] = [];
    this.fields.forEach((key: any) => {
      temp = temp[key] || list[key];
    });
    return temp;
  }

  transform(input: any, sorting: any): any {
    if (!sorting || !sorting.column || !sorting.status) {
      return input;
    }
    const value = [...input]; // make a copy of the input's reference
    this.fields = sorting.column.split('.');
    value.sort((a: any, b: any) => {
      const first = this.getElement(a);
      const second = this.getElement(b);
      return OrderPipe.comparator(first, second);
    });
    return (sorting.descending) ? value.reverse() : value;
  }
}
