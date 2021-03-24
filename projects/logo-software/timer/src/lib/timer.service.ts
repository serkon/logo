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
  public langData: Lang;
  /**
   * Pause time in milliseconds if timer is paused.
   */
  public pausedTime: number;
  /**
   * First value of the timer before has been started.
   */
  public timerValue: number;
  public isEnded = new Subject<boolean>();
  private timer;

  /**
   * Starts the timer.
   */
  public startTimer() {
    this.timerValue = this.timerCount;
    this.readableTime = new TimePipe().transform(this.timerCount, this.langData);
    this.runTimer();
  }

  /**
   * Run timer function which will starts timer with setted values
   */
  public runTimer() {
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
      this.readableTime = new TimePipe().transform(this.timerCount, this.langData);
    }, 1000);
  }

  /**
   * Pause the timer.
   */
  public pauseTimer() {
    this.pausedTime = this.timerCount;
    clearInterval(this.timer);
  }

  /**
   * Resume the paused timer. If the timer isn't paused, resume function will not  be worked.
   */
  public resumeTimer() {
    console.log(this.pausedTime);
    if (this.pausedTime !== undefined) {
      this.timerCount = this.pausedTime;
      this.runTimer();
    }
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
    this.readableTime = new TimePipe().transform(this.timerCount, this.langData);
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
  }

  private changeToReadable(ms: number) {
    const totalSeconds = Math.floor(ms / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const days = Math.floor(totalHours / 24);
    const hours = Math.floor(totalHours % 24);
    const minutes = Math.floor(totalMinutes % 60);
    const seconds = Math.floor(totalSeconds % 60);

    let convertedTime = '';
    if (days > 0) {
      if (days < 10) {
        convertedTime += `<div>0${days}<small>Gün</small></div>`;
      } else {
        convertedTime += `<div>${days}<small>Gün</small></div>`;
      }
    }
    ;

    if (hours > 0) {
      if (hours < 10) {
        convertedTime += `<div>0${hours}<small>Saat</small></div>`;
      } else {
        convertedTime += `<div>${hours}<small>Saat</small></div>`;
      }
    }
    ;

    if (minutes >= 0) {
      if (minutes < 10) {
        convertedTime += `<div>0${minutes}<small>Dk</small></div>`;
      } else {
        convertedTime += `<div>${minutes}<small>Dk</small></div>`;
      }
    }
    ;

    if (seconds >= 0) {
      if (seconds < 10) {
        convertedTime += `<div>0${seconds}<small>Sn</small></div>`;
      } else {
        convertedTime += `<div>${seconds}<small>Sn</small></div>`;
      }
    } else if (seconds < 0) {
      convertedTime = `<div>00<small>Dk</small></div><div>00<small>Sn</small></div>`;
    }
    ;

    this.readableTime = convertedTime;
  }
}
