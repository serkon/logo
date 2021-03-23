import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo-progress-bar-showcase',
  templateUrl: './progress-bar-showcase.component.html',
  styleUrls: ['./progress-bar-showcase.component.scss'],
})
export class ProgressBarShowcaseComponent implements OnInit {

  public sampleCurrent: number = 100;

  ngOnInit(): void {
    setTimeout(() => {
      this.sampleCurrent = 350;
    }, 4500);
  }

}
