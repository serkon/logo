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
   * Usage: Util.convertToEnglishLetters('Şey BENİM ADIM ağa'); // output: Sey BENIM ADIM aga
   * @param value: string - Text will be converted to the English characters
   * return string
   */
  static convertToEnglishLetters(value: any): string {
    const letters: any = {
      'ı': 'i',
      'ş': 's',
      'ğ': 'g',
      'ü': 'u',
      'ç': 'c',
      'ö': 'o',
      'İ': 'I',
      'Ş': 'S',
      'Ğ': 'G',
      'Ü': 'U',
      'Ç': 'C',
      'Ö': 'O',
    };
    return value.replace(/(([ışğüçöİŞĞÜÇÖ]))/g, (letter: string) => {
      return letters[letter];
    });
  }

  /**
   * This method returns Object type
   * @param value - The target data from which will learn the type.
   */
  static type(value: any): string {
    const reg = new RegExp(/^\[object (.*)\]$/);
    return Object.prototype.toString.call(value).match(reg)[1];
  }

  /**
   * Copy any text to clipboard
   * @param text - The text which will be copied
   */
  static copyToClipboard(text: any) {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text || (event as any).target.innerText;
    tempInput.select();
    document.execCommand('copy');
    tempInput.remove();
  }

  /**
   * Removes null and undefined props from object
   * var test  = {a:1,b:2,d:{c:null, d:4}}
   * test.clear(); // returns {a:1,b:2,d:{d:4}}
   *
   * @param  [value] - The object will be cleared
   * @param [hard=false] - this option require if clear all empty things as [], {}, '', null.
   * @param [clone=true] - If clone true default variable not effected
   * @returns any;
   */
  static clearNullAndUndefined(value: any, hard = false, clone = false): any {
    const _this: any = clone ? JSON.parse(JSON.stringify(value)) : value;
    if (_this.constructor === Object && hard.constructor === Boolean) {
      Object.keys(_this).forEach((key) => {
        if (_this.hasOwnProperty(key)) {
          const nValue = _this[key];
          if (nValue !== null && nValue.constructor === Object) {
            Util.clearNullAndUndefined(nValue, hard);
          }
          if (nValue === null ||
            (hard && nValue.constructor === Object && Util.isObjectNull(nValue)) ||
            (hard && (nValue.constructor === String || nValue.constructor === Array) && nValue.length === 0)
          ) {
            delete _this[key];
          }
        }
      });
    } else if (_this.constructor === Array) {
      if (_this.length > 0) {
        return _this.filter(item => !Util.isObjectNull(Util.clearNullAndUndefined(item, hard)));
      }
    }
    return _this;
  }

  /**
   * Creates the number of items requested from the defined starting number.
   * @param start - which number will be started
   * @param count - how many items will be added
   * @returns Array<number>;
   *
   * Usage:
   * Util.range(4, 13); // result: [13, 14, 15, 16]
   */
  static range(count = 0, start = 0): number[] {
    const boost = (u, i) => start + i;
    return [...Array(count)].map(boost);
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
   * Returns true if `value` is an array, else returns false.
   * @param value - The value to test.
   * @returns Boolean
   */

  static isArray(value: any) {
    return Object.prototype.toString.call(value) === '[object Array]';
  }

  /**
   * Returns true if `value` is an object (excluding null), else returns false.
   * @param value - The value to test.
   * @returns Boolean
   */
  static isObject(value) {
    return value !== null && Object.prototype.toString.call(value) === '[object Object]';
  }

  /**
   * Object is null check
   * @returns Boolean
   */
  static isObjectNull(value: any) {
    return value.constructor === Object && Object.keys(value).length === 0;
  }

  /**
   * Returns true if `value` is neither null nor undefined, else returns false.
   * @param value - The value to test.
   * @returns Boolean
   */
  static isNullOrUndef(value: any) {
    return value === null || typeof value === 'undefined';
  }

  /**
   * Returns a deep copy of `source` without keeping references on objects and arrays.
   * @param source - The value to clone.
   * @returns any
   */
  static clone(source: any) {
    if (Util.isArray(source)) {
      return source.map(Util.clone);
    }
    if (Util.isObject(source)) {
      const target = {};
      const keys = Object.keys(source);
      const kLength = keys.length;
      let k = 0;
      for (; k < kLength; ++k) {
        target[keys[k]] = Util.clone(source[keys[k]]);
      }
      return target;
    }
    return source;
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
   * Returns matched result in the each array object with given filter object
   *
   * @param value: Object[] - The source object which will be searched inside
   * @param filter: Object - Given object will be find
   * @param exact: boolean - Compare for value as exactly same. Otherwise it will compare with Regexp
   * for more information look to the ObjectExtender.contains() method.
   * @returns Object
   */
  static findAllObjectInArray(value, filter: any, exact = false) {
    const result: any = [];
    const looper = (item: any) => {
      if (item !== null && typeof item !== 'undefined') {
        if (Util.type(item) === 'Object' && Util.isContained(item, filter, exact)) {
          result.push(item);
        } else if (item.constructor.name === 'Array') {
          return Util.isContained(item, filter, exact);
        }
      }
      return [];
    };
    value.forEach(looper);
    return result;
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

  /**
   * Add char string to specified position
   * @param data: string - Given string data will be replaced
   * @param value - Given string  data will be added
   * @param index - The start position of the inserted a new string
   */
  static addCharsBetween(data, value, index) {
    const str = data.split('');
    str[index] = value;
    return str.join('');
  }

  /**
   * Get value by given path of object
   * @example
   * var m = {a: {b:1, c: {d: {e: [1,2,3]}}}}
   * Util.getObjectPathValue(m, "a.c.d.e") // result is (3) [1, 2, 3]
   * @param value - The object from which to import data
   * @param path - String path of the target property
   */
  static getObjectPathValue(value: any, path: string) {
    let data = value;
    if (!!path && path.constructor === String) {
      path.split('.').forEach((val: any) => {
        data = (data !== null && typeof data !== 'undefined') ? data[val] : null;
      });
    }
    return data;
  }

  static setObjectPathValue(obj, path, value) {
    let schema = obj;  // a moving reference to internal objects within obj
    const pList = path.split('.');
    const len = pList.length;
    for (let i = 0; i < len - 1; i++) {
      const elem = pList[i];
      if (!schema[elem]) {
        schema[elem] = {};
      }
      schema = schema[elem];
    }
    schema[pList[len - 1]] = value;
    return schema;
  }

  /**
   * Convert dot separated string to object then assign the value to latest key
   * @param prop: string - Object property paths
   * @param value: any - The value will assign the path.
   * @returns Object;
   *
   * @Usage
   * Util.makeObject("a.b.c", 'some value');  will return {a: {b: {c: 'some value'}}};
   */
  static makeObject(prop: string, value: any): { [key: string]: any } {
    const props = prop.split('.');
    let temp = {};
    props.reverse().forEach((key, index) => {
      if (index === 0) {
        temp[key] = !Util.isNullOrUndef(value) ? value : null;
      } else {
        const hold = temp;
        temp = {};
        temp[key] = hold;
      }
    });
    return temp;
  }

  /**
   * Extract pre-defined keys from objects list, with ordering options
   * @param data - Object source
   * @param keys - Which properties will be exported
   * @returns Object - Exports given array keys as an object with values. // result: {s: [144, 10, 21], c:[3, 30, 23]}
   *
   * Usage:
   * let data, keys;
   * data = [{ s: 144, b: 2, c: 3 }, { s: 10, b: 20, c: 30 }, { s: 21, b: 22, c: 23 }];
   * keys = [ "s", "c"];
   *
   * const {s,c} = Util.objectKeysValues(data,keys);
   * console.log(s); // [144, 10, 21]
   */
  static getObjectKeysValues(data, keys): { [key: string]: string } {
    const result = {};
    keys.map((prop, propKey) => {
      result[prop] = (data.map((item, itemKey) => {
        return item[prop];
      }));
    });
    return result;
  }

  /**
   * This method extract object all properties path as a string with value
   * @param object: any - The object will be extracted
   *
   * Usage:
   * const obj = {c: {t: {b: 123, m: 43, d: 48, e: {z: 2}}}, a: 13, b: 34};
   * Util.extractObjectAllValues(obj); // returns {"c.t.b":123,"c.t.m":43,"c.t.d":48,"c.t.e.z":2,"a":13,"b":34}
   */
  static extractObjectAllValues(object: any, path = [], result = {}, parent?: boolean): any {
    if (!path) {
      path = [];
    }
    Object.keys(object).forEach((item, index) => {
      if ((object[item]).constructor === Object) {
        path.push(item);
        Util.extractObjectAllValues(object[item], path, result, true);
      } else {
        path.push(item);
        const value = object[item];
        if (!parent) {
          path = [item];
        }
        result[path.join('.')] = value;
        path.pop();
      }
    });
    return result;
  }

  /**
   * Compare two multidimensional objects, check one of them is contains other.
   * @example
   * var one = {a:1, b:2, c: {d:1, e:2}};
   * var two = {b: 2, c: {d:1}}
   * one.isContained(two); // return false -> it includes two
   * @param value - The target object
   * @param filter - The object which will be looking for
   * @param exact - I can't remember why I add this feature
   * @param debug - If it is true, will generate output for debugging to the console
   */
  static isContained(value: any, filter: any, exact = true, debug = false): boolean {
    const method = key => {
      let nValue = value[key];
      let nFilter = filter[key];
      if (nFilter !== null && typeof nFilter !== 'undefined' && Util.type(nFilter) !== 'Object' &&
        nValue !== null && typeof nValue !== 'undefined' && Util.type(nValue) !== 'Object') {
        if (Util.type(nFilter) === 'Array') {
          return !Util.isContained(nFilter, exact);
        } else if (exact) {
          return !(nValue === nFilter);
        } else {
          nFilter = nFilter.constructor.name === 'String' ? Util.turkishToLower(nFilter) : nFilter;
          nValue = nValue.constructor.name === 'String' ? Util.turkishToLower(nValue) : nValue;
          if (!new RegExp(nFilter, 'gi').test(nValue) && debug) {
            // tslint:disable-next-line:no-console
            console.log('false: ', nValue, nFilter);
          }
          return !new RegExp(nFilter, 'gi').test(nValue);
        }
      } else {
        if (nValue !== null && typeof nValue !== 'undefined' && Util.type(nValue) === 'Object' &&
          nFilter !== null && typeof nFilter !== 'undefined' && Util.type(nFilter) === 'Object') {
          return !Util.isContained(nValue, nFilter, exact);
        } else {
          if (nValue !== nFilter && debug) {
            // tslint:disable-next-line:no-console
            console.log('false: ', key, nValue, nFilter);
          }
          return !(nValue === nFilter);
        }
      }
    };
    return !Object.keys(filter).some(method);
  }

  /**
   * Check given date is valid
   * @param value - any value
   */
  static isDateValid(value: any): boolean {
    const date: any = new Date(value);
    return date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
  }

  static version() {
    // tslint:disable-next-line:no-console
    console.log('v2');
  }

  /**
   * Merge two object or array
   * @param current
   * @param updates
   * @param deep
   */
  static merge(current, updates, deep: boolean = false) {
    for (const key of Object.keys(updates)) {
      if (!current.hasOwnProperty(key) || typeof updates[key] !== 'object') {
        current[key] = updates[key];
      } else if (deep && current[key] instanceof Array && updates[key] instanceof Array) {
        current[key] = current[key].concat(updates[key]);
      } else {
        Util.merge(current[key], updates[key]);
      }
    }
    return current;
  }
}
