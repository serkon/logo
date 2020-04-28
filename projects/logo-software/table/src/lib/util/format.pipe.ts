import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';

/**
 * @version 1.0.1
 * @desc This pipe used to format strings to given pattern
 * @example: {{"2018-01-24T15:34:16+03:00" | format: 'date: dd.MM.yyyy HH:mm'}}
 * @example: {{"34" | format: 'percentage'}}
 */
@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {

  datePipe = new DatePipe('en-US');
  decimalPipe = new DecimalPipe('en-US');
  currencyPipe = new CurrencyPipe('en-US');

  transform(input: string, args: any): any {
    const pipeArgs = args.split(':');
    let format = '';
    let parsedFloat = 0;
    for (let i = 0; i < pipeArgs.length; i++) {
      pipeArgs[i] = pipeArgs[i].trim(' ');
    }

    switch (pipeArgs[0].toLowerCase()) {
      case 'text':
        return input;
      case 'decimal':
        format = pipeArgs.length > 1 ? pipeArgs[1] : null;
        return this.decimalPipe.transform(input, format);
      case 'currency':
        format = pipeArgs.length > 1 ? pipeArgs[1] : null;
        return this.currencyPipe.transform(input, format);
      case 'number':
        parsedFloat = !isNaN(parseFloat(input)) ? parseFloat(input) : 0;
        format = pipeArgs.length > 1 ? pipeArgs[1] : null;
        return this.decimalPipe.transform(parsedFloat, format);
      case 'percent':
        parsedFloat = !isNaN(parseFloat(input)) ? parseFloat(input) : 0;
        format = pipeArgs.length > 1 ? pipeArgs[1] : null;
        return this.decimalPipe.transform(parsedFloat, format) + '%';
      case 'date':
        format = pipeArgs[2] ? pipeArgs[1] + ':' + pipeArgs[2] : pipeArgs[1] ? pipeArgs[1] : 'dd.MM.yyyy HH:mm';
        return (!!input) ? this.datePipe.transform(new Date(input), format) : null;
      case 'datetime':
        const date = !isNaN(parseInt(input, 10)) ? parseInt(input, 10) : new Date(input);
        format = 'MMM d, y h:mm:ss a';
        if (pipeArgs.length > 1) {
          format = '';
          for (let i = 1; i < pipeArgs.length; i++) {
            format += pipeArgs[i];
          }
        }
        return this.datePipe.transform(date, format);
      default:
        return input;
    }
  }
}
