import { Pipe, PipeTransform } from '@angular/core';
import { Util } from '@logo-software/core';

@Pipe({
  name: 'slug',
})
export class SlugPipe implements PipeTransform {

  transform(value: string): string {
    value = Util.turkishToLower(value);
    value = Util.convertToEnglishLetters(value);
    return value.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
    console.log(value);
  }
}
