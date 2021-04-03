/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

/**
 * Util class for common javascript operations
 */
export class Util {

  /**
   * https://gist.github.com/barlas/760cbf77b31c6922d159
   * This method returns turkish chars to english lowercase version
   *
   * __Usage:__
   * ```javascript
   * Util.turkishToLower("türkçeişğİIiıŞÜĞ");
   * ```
   */
  static turkishToLower(value: any) {
    let string = value;
    const letters: any = {'İ': 'i', 'I': 'ı', 'Ş': 'ş', 'Ğ': 'ğ', 'Ü': 'ü', 'Ö': 'ö', 'Ç': 'ç'};
    string = string.replace(/(([İIŞĞÜÇÖ]))/g, (letter: string) => {
      return letters[letter];
    });
    return string.toLowerCase();
  }

  /**
   * https://gist.github.com/barlas/760cbf77b31c6922d159
   * This method returns turkish chars to english uppercase version
   * Usage: Util.turkishToUpper("türkçeişğİIiıŞÜĞ");
   */
  static turkishToUpper(value: any) {
    let string = value;
    const letters: any = {'i': 'İ', 'ş': 'Ş', 'ğ': 'Ğ', 'ü': 'Ü', 'ö': 'Ö', 'ç': 'Ç', 'ı': 'I'};
    string = string.replace(/(([iışğüçö]))/g, (letter: string) => {
      return letters[letter];
    });
    return string.toUpperCase();
  }

  /**
   * Creates an array of unique values
   * @param array - The arrays to inspect
   */
  static union(...array: any[]) {
    const newFlatArray: any[] = ([...array] as any).flat(Infinity);
    const filter = (item, pos) => {
      return newFlatArray.indexOf(item) === pos;
    };
    return newFlatArray.filter(filter);
  }

  /**
   * Find index of given value inside array
   * Usage:
   * @param array - source array
   * @param value - variable will be find index
   * @returns - Array<number>
   */
  static findAllIndex(array: any[], value: any): number[] {
    const method = (a: any, e: number, i: any) => {
      if (e === value) {
        a.push(i);
      }
      return a;
    };
    return array.reduce(method, []);
  }

  /**
   * Remove character from given string with given count
   * Usage: Util.removeCharsBetween('serkan', 3, 2);
   * @param value - String value will be split
   * @param start - start position, 0 (zero) is first char
   * @param count - how much char will be get
   */
  static removeCharsBetween(value: string, start: number, count = 1) {
    const str = value.split('');
    str.splice(start, count);
    return str.join('');
  }
}
