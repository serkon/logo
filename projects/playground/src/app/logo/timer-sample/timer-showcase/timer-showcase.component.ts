import { Component, OnInit } from '@angular/core';

import { TimerService } from '@logo-software/timer';

@Component({
  selector: 'logo-timer-showcase',
  templateUrl: './timer-showcase.component.html',
  styleUrls: ['./timer-showcase.component.scss'],
})
export class TimerShowcaseComponent implements OnInit {
  public timerResult: string = '';
  public customTimer: number;

  constructor(private timerService: TimerService) {
  }

  ngOnInit(): void {

  }

  public setTimer() {
    this.customTimer ? this.timerService.setTime(this.customTimer) : alert('Please set timer in milliseconds');
  }

  public sampleOnTimeEnd($event) {
    this.timerResult = `Timer ended. ID of the timer is ${$event}`;
  }

}
