import { Inject, InjectionToken, Optional } from '@angular/core';

export enum STORAGE_TYPES {
  LOCAL = 'localStorage',
  SESSION = 'sessionStorage',
}

export const STORAGE_TYPE_CONFIG = new InjectionToken<string>('storage_type');

/**
 * Storage service holds data at browser's local storage or session storage
 * Default storage type is LocalStorage.
 *
 * __Usage Example__
 *
 * ```ts
 * StorageClass.setItem('user', {name: 'Serkan', surname: 'Konakcı'});
 * StorageClass.getItem('user'); // <sub>return {name: 'Serkan', surname: 'Konakcı'}</sub>
 * ```
 * @stacked-example(StorageClass, logo/core-sample/storage-class-showcase/storage-class-showcase.component)
 */
export class StorageService {
  public storageType: Storage;
  storageAvailability: boolean;

  constructor(@Optional() @Inject(STORAGE_TYPE_CONFIG) config?: STORAGE_TYPES) {
    this.storageType = window[config || STORAGE_TYPES.LOCAL];
    this.storageAvailability = true;
  }

  getItem(key: any) {
    try {
      return JSON.parse(this.storageType.getItem(key));
    } catch (e) {
      this.storageAvailability = false;
      return null;
    }
  }

  setItem(key: string, value: any) {
    try {
      this.storageType.setItem(key, JSON.stringify(value));
    } catch (exception) {
      this.storageAvailability = false;
      throw exception;
    }
  }

  removeItem(key: string) {
    try {
      this.storageType.removeItem(key);
    } catch (e) {
      this.storageAvailability = false;
    }
  }

  clear() {
    let result;
    try {
      result = this.storageType.clear();
    } catch (e) {
      this.storageAvailability = false;
      result = null;
    }
    return result;
  }

  getConfig(key: string) {
    let result;
    try {
      result = JSON.parse(this.storageType.getItem(key));
    } catch (e) {
      result = null;
      this.storageAvailability = false;
    }
    return result;
  }

  getStorageAvailability() {
    return this.storageAvailability;
  }
}

export function StorageFactory(config: STORAGE_TYPES) {
  return new StorageService(config);
}
