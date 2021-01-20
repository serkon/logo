import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { SafeHTMLPipe } from './safe-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * This pipe used to format strings to given pattern. Pipe format types:
 *  - text
 *  - currency
 *  - number
 *  - decimal
 *  - percent
 *  - date
 *  - datetime
 *
 * __Usage Example__
 * ```typescript
 * <div>{{"2018-01-24T15:34:16+03:00" | format: 'date: dd.MM.yyyy HH:mm'}}</div>
 * <div>{{"34" | format: 'percent'}}</div>
 * <div>{{"34" | format: 'percent: 1.1-3:"it"'}}</div>
 * <div>{{"235146" | format: 'number: 1.1-3'}}</div>
 * <div>{{"5000113" | format: 'currency: 1.1-3:"en"'}}</div>
 * ```
 */
@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {

  datePipe = new DatePipe('en-US');
  decimalPipe = new DecimalPipe('en-US');
  currencyPipe = new CurrencyPipe('en-US');
  safeHtml = new SafeHTMLPipe(this.sanitized);

  constructor(private sanitized: DomSanitizer) {
  }

  transform(input: string, args: any): any {
    const pipeArgs = args.split(':');
    let format = '';
    let parsedFloat = 0;
    for (let i = 0; i < pipeArgs.length; i++) {
      pipeArgs[i] = pipeArgs[i].trim(' ');
    }

    switch (pipeArgs[0].toLowerCase()) {
      case 'text':
        return this.safeHtml.transform(input);
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
        format = 'yyyy-MM-ddThh:mm';
        return (!!input) ? this.datePipe.transform(new Date(input), format) : null;
      case 'timestamp':
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
