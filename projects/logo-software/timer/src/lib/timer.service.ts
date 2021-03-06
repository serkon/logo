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
import { Subject } from 'rxjs';

import { TimePipe } from './pipe/time.pipe';
import { Lang } from './lang';

/**
 * Timer service lets developers to control timer variables on the go.
 */
@Injectable({
  providedIn: 'root',
})
export class TimerService {
  /**
   * The variable that the counter starts or ends to count or countdown. Number based variable must be in milliseconds.
   */
  public timerCount: number;
  /**
   * Set timer as counter or countdown clock.
   */
  public countdown: boolean;
  /**
   * Refactored version of the timerCount variable. Library turns milliseconds to readable format in days, hours, minutes and seconds.
   */
  public readableTime: string;
  /**
   * If countdown is false, end time will be setted.
   */
  public endTime: number;
  /**
   * Language details for localization.
   */
  public language: Lang;
  /**
   * Pause time in milliseconds if timer is paused.
   */
  public pausedTime: number = 0;
  /**
   * First value of the timer before has been started.
   */
  public timerValue: number;
  /**
   * Global auto start option that will change on the fly.
   */
  public autoStart: boolean;

  public isEnded = new Subject<boolean>();
  private timer;

  /**
   * Prepare the timer values and if autoStart option is true, starts the timer.
   */
  public prepareTimer() {
    this.timerValue = this.timerCount;
    this.readableTime = new TimePipe().transform(this.timerCount, this.language);
    this.autoStart ? this.runTimer() : '';
  }

  /**
   * Run timer function which will starts timer with setted values
   */
  public runTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.countdown) {
        this.timerCount = Math.floor(this.timerCount - 1000);
        if (this.timerCount < 0) {
          clearInterval(this.timer);
          this.isEnded.next(true);
        }
      } else {
        this.timerCount = Math.floor(this.timerCount + 1000);
        if (this.timerCount === this.endTime) {
          clearInterval(this.timer);
          this.isEnded.next(true);
        }
      }
      this.pausedTime = 0;
      this.readableTime = new TimePipe().transform(this.timerCount, this.language);
    }, 1000);
  }

  /**
   * Pause the timer.
   */
  public pauseTimer() {
    if (this.pausedTime === 0) {
      this.pausedTime = this.timerCount;
      clearInterval(this.timer);
    }
  }

  /**
   * Resume the paused timer. If the timer isn't paused, resume function will not  be worked.
   */
  public resumeTimer() {
    setTimeout(() => {
      if (this.pausedTime !== 0) {
        this.timerCount = this.pausedTime;
        this.runTimer();
      } else {
        this.pauseTimer();
      }
    }, 1000);
  }

  /**
   * Sets the timer end point and stops the timer.
   */
  public stopTimer() {
    if (this.countdown) {
      this.timerCount = 0;
    } else {
      this.timerCount = this.endTime;
    }
    clearInterval(this.timer);
    this.readableTime = new TimePipe().transform(this.timerCount, this.language);
    this.isEnded.next(true);
  }

  /**
   * Revert the timer to the start value
   */
  public resetTimer() {
    clearInterval(this.timer);
    this.timerCount = this.timerValue;
    this.runTimer();
  }

  /**
   * Sets the timer clock. Value must be in milliseconds.
   * @param ms:number
   */
  public setTime(ms: number) {
    this.timerCount = ms;
    this.prepareTimer();
  }
}
