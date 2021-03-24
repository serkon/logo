/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { TimerService } from './timer.service';
import { Lang } from './lang';
import { TimePipe } from './pipe/time.pipe';

/**
 * Timer library lets your users to know their time in your app.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-timer
 *  [timeInMs]="1234567"
 *  [id]="'myLogoTimer'"
 *  [title]="'Estimated Time'"
 *  [cssClasses]="'my-logo-timer-theme'"
 *  [theme]="'primary'"
 *  [isCountdown]="true"
 *  [showIcon]="true"
 *  [showProgressBar]="true"
 *  [langData]="{days: 'Gün', hours: 'Saat', minutes: 'Dk', seconds: 'Sn'}"
 *  (onTimeCompleted)="sampleOnTimeEnd($event)"
 * >
 * </logo-timer>
 * ```
 */
@Component({
  selector: 'logo-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimePipe],
})
export class TimerComponent implements OnInit, OnDestroy {
  /**
   * Set custom CSS Classes for design customization.
   */
  @Input() cssClasses: string;
  /**
   * If set true, timer works as countdown clock, else timer starts from zero.
   */
  @Input() isCountdown: boolean = true;
  /**
   * Timer starts or ends time in milliseconds
   */
  @Input() timeInMs: number;
  /**
   * The text before the timer.
   */
  @Input() title: string;
  /**
   * Identifier of the timer which is triggered when completed.
   */
  @Input() id: string;
  /**
   * The Logo Theme based themes of the timer.
   */
  @Input() theme: 'primary' | 'white' | 'success' | 'warning' | 'danger' = 'primary';
  /**
   * Show icon or not before the timer text.
   */
  @Input() showIcon: boolean = false;
  /**
   * Show progress bar or not after the title text.
   */
  @Input() showProgressBar: boolean = false;
  /**
   * Language inputs for days, hours, minutes and seconds. Must be formatted as lang.ts file.
   */
  @Input() langData: Lang;
  /**
   * Output of the completed timer. It returns the id that setted.
   */
  @Output() public onTimeCompleted: EventEmitter<string> = new EventEmitter<string>();

  private watchTimer: Subscription;

  constructor(public timerService: TimerService) {
    this.watchTimer = this.timerService.isEnded.subscribe(x => {
      x ? this.onTimeCompleted.emit(this.id) : '';
    });
  }

  ngOnInit(): void {
    if (this.isCountdown) {
      this.timerService.timerCount = this.timeInMs;
    } else {
      this.timerService.timerCount = 0;
      this.timerService.endTime = this.timeInMs;
    }
    this.timerService.langData = this.langData;
    this.timerService.countdown = this.isCountdown;
    this.timerService.startTimer();
  }

  ngOnDestroy(): void {
    this.watchTimer.unsubscribe();
  }
}
