/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Injectable } from '@angular/core';

/**
 * ProgressBar Service lets you change progress bar settings and values on the go.
 */
@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  /**
   * Progress bar value for completion of the task
   */
  public all: number;
  /**
   * Waiting status of the progress bar
   */
  public isWaiting: boolean;
  /**
   * Calculated percentage of the progress bar.
   */
  public percentage: number;
  /**
   * Lets starts progress bar from start or form end.
   */
  public isProgress: boolean;

  private _current: number;

  /**
   * Progress bar current value getter.
   */
  get current(): number {
    return this._current;
  }

  /**
   * Progress bar current value setter.
   */
  set current(val: number) {
    if (val !== this._current) {
      this._current = val;
      this.calculatePercentage();
    }
  }

  public calculatePercentage() {
    if (this.all) {
      this.current > 0 ? this.percentage = Math.abs((this.current * 100) / this.all) : this.percentage = 0;
    }
  }
}
