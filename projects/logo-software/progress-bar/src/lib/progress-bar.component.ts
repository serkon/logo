/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { ProgressBarService } from './progress-bar.service';

/**
 * Progress Bar visualize task completion status.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-progress-bar
 *   [size]="'small'"
 *   [theme]="'primary'"
 *   [cssClasses]="'my-logo-progress-bar'"
 *   [complete]="500"
 *   [current]="sampleCurrent"
 *   [isProgress]="false"
 *   [isInWait]="false"
 * >
 * </logo-progress-bar>
 * ```
 */
@Component({
  selector: 'logo-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  /**
   * Sets the size of the progress bar.
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * Semantic themes of the Logo Theme.
   */
  @Input() theme: 'primary' | 'light' | 'success' | 'warning' | 'danger' = 'primary';
  /**
   * isProgress lets developers to start progress bar from zero to 100%.
   */
  @Input() isProgress: boolean = false;
  /**
   * Puts progress bar in waiting case.
   */
  @Input() isInWait: boolean = false;
  /**
   * Current status of the progress at initilaizing.
   */
  @Input() current: number;
  /**
   * The complete value of the progress.
   */
  @Input() complete: number;
  /**
   * CSS Classes to customize progress bar.
   */
  @Input() cssClasses: string;

  constructor(public progressService: ProgressBarService) {
  }

  ngOnInit(): void {
    this.isProgress ? this.progressService.current = 0 : this.progressService.current = this.complete;
    this.progressService.all = this.complete;
    this.progressService.isWaiting = this.isInWait;
    this.progressService.isProgress = this.isProgress;
    this.progressService.calculatePercentage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.current.firstChange) {
      this.progressService.current = this.current;
      this.progressService.calculatePercentage();
    }
  }

}
