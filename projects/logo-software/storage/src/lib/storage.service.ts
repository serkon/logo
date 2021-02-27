import { Inject, InjectionToken, Optional } from '@angular/core';

/**
 * Storage Types
 * There are two types of storage
 */
export enum STORAGE_TYPES {
  /**
   * It store cookie at local storage. Persists even when the browser is closed and reopened.
   */
  LOCAL = 'localStorage',
  /**
   * It store cookie at session storage. Stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
   */
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

  /**
   * Get item in storage
   * @param key
   */
  getItem(key: any) {
    try {
      return JSON.parse(this.storageType.getItem(key));
    } catch (e) {
      this.storageAvailability = false;
      return null;
    }
  }

  /**
   * Set item to storage
   * @param key
   * @param value
   */
  setItem(key: string, value: any) {
    try {
      this.storageType.setItem(key, JSON.stringify(value));
    } catch (exception) {
      this.storageAvailability = false;
      throw exception;
    }
  }

  /**
   * Remove any key defined before from storage
   * @param key
   */
  removeItem(key: string) {
    try {
      this.storageType.removeItem(key);
    } catch (e) {
      this.storageAvailability = false;
    }
  }

  /**
   * Clear all keys at storage
   */
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

  /**
   * Return key as JSON format
   * @param key
   */
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

  /**
   * Storage ability
   */
  getStorageAvailability() {
    return this.storageAvailability;
  }
}

export function StorageFactory(config: STORAGE_TYPES) {
  return new StorageService(config);
}
