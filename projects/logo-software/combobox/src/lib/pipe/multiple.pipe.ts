import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'multiple'})
export class MultiplePipe implements PipeTransform {
  transform(item: any, path: any): any {
    let data = item;
    if (!!path && path.constructor === String) {
      path.split('.').forEach((val: any) => {
        data = (data !== null && typeof data !== 'undefined') ? data[val] : null;
      });
    }
    return data;
  }
}
