import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Wizard service lets you to reach the options of the wizard on-the-fly.
 */
@Injectable({
  providedIn: 'root',
})
export class WizardService {
  /**
   * Currently active step
   */
  public active: number;
  /**
   * Array of the steps which have warning case
   */
  public warningSteps = [];
  /**
   * Vertical option of the wizard.
   */
  public isVertical = new Subject<boolean>();
}
