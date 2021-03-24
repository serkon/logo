import { Component } from '@angular/core';

import { TimerService } from '@logo-software/timer';

@Component({
  selector: 'logo-timer-showcase',
  templateUrl: './timer-showcase.component.html',
  styleUrls: ['./timer-showcase.component.scss'],
})
export class TimerShowcaseComponent {
  public timerResult: string = '';
  public customTimer: number;

  constructor(private timerService: TimerService) {
  }

  public setTimer() {
    this.customTimer ? this.timerService.setTime(this.customTimer) : alert('Please set timer in milliseconds');
  }

  public resetTimer() {
    this.timerService.resetTimer();
  }

  public pauseTimer() {
    this.timerService.pauseTimer();
  }

  public resumeTimer() {
    this.timerService.resumeTimer();
  }

  public stopTimer() {
    this.timerService.stopTimer();
  }

  public sampleOnTimeEnd($event) {
    this.timerResult = `Timer ended. ID of the timer is ${$event}`;
  }

}
