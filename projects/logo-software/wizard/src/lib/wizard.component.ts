/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */
import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { NavigationEnd, PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { delay } from 'rxjs/operators';

import { ItemComponent } from './item.component';
import { WizardService } from './wizard.service';

/**
 * Wizard library create business flow paths for your users.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-wizard
 *  [activeStep]="0"
 *  [cssClasses]="'my-own-wizard-class'"
 *  [routing]="true"
 *  [isVertical]="true"
 *  (change)="yourChangeTrigger($event)"
 *  (tabEvent)="yourTabEvent($event)"
 * >
 *   <logo-step title="one">content of wizard step one</logo-step>
 *   <logo-step title="two">content of wizard step two</logo-step>
 * </logo-wizard>
 * ```
 *
 * ### Footer
 * Add your own footer contents to the footer element of the wizard.
 * For example:
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-wizard...>
 *   <logo-step title="one">content of wizard step one</logo-step>
 *   <div footer>My own footer content</div>
 * </logo-tabs>
 * ```
 */
@Component({
  selector: 'logo-wizard',
  templateUrl: 'wizard.component.html',
  styleUrls: ['wizard.component.scss'],
})
export class WizardComponent implements AfterContentInit {
  /**
   * Step changer subscription
   */
  public $changeStep: EventEmitter<number> = new EventEmitter<number>();
  /**
   * Set active step. Default is first one.
   */
  @Input() activeStep: number = 0;
  /**
   * Add CSS classes as a string for styling.
   */
  @Input() cssClasses: string;
  /**
   * Full width or not option for the wizard base.
   */
  @Input() hasContainer: boolean;
  /**
   * Show footer or not option for the wizard content area.
   */
  @Input() hasFooter: boolean;
  /**
   * Place wizard headers in a vertical layout.
   */
  @Input() isVertical: boolean;
  /**
   * All steps was added
   */
  @ContentChildren(ItemComponent) steps: QueryList<ItemComponent>;
  /**
   * Routing is enabled, default false. Just shows ng-content. If route enabled, step route will be shown inside the content.
   */
  @Input() routing: boolean = false;
  /**
   * Triggered when clicked another step
   */
  @Output() stepChange: EventEmitter<ItemComponent> = new EventEmitter<ItemComponent>();
  /**
   * When added, created or changed ItemComponent this event will be triggered
   */
  @Output() stepEvent: EventEmitter<QueryList<ItemComponent>> = new EventEmitter<QueryList<ItemComponent>>();
  public warningSteps = [];
  private tree: UrlTree;
  private group: UrlSegmentGroup;

  constructor(private router: Router, public wizardService: WizardService) {
    this.isRouteMatch();
    this.$changeStep.subscribe((index: number) => {
      this.setActiveStep(index);
    });
  };

  isRouteMatch() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.tree = this.router.parseUrl(this.router.url);
        this.group = this.tree.root.children[PRIMARY_OUTLET];
      }
    });
  }

  ngAfterContentInit() {
    if (this.group && this.routing) {
      const segments: UrlSegment[] = this.group.segments;
      this.steps.toArray().forEach((step: ItemComponent, stepIndex) => {
        if (step.route) {
          const parts = step.route.split('/');
          const isMatched = parts.every((part, index) => {
            const isParameter = part.startsWith(':');
            if (!isParameter) {
              return !!segments.find((segment: UrlSegment) => segment.path === part);
            }
            return true;
          });
          if (isMatched) {
            this.activeStep = stepIndex;
          }
        }
      });
    }
    if (this.activeStep !== this.wizardService.active) {
      this.setActiveStep(this.activeStep);
    }
    this.steps.changes.pipe(delay(0)).subscribe((changes: QueryList<ItemComponent>) => {
      setTimeout(() => {
        this.stepEvent.emit(changes);
      }, 0);
    });
  }

  selectStep(step: ItemComponent) {
    if (!step.isDisabled) {
      this.steps.toArray().forEach((item: ItemComponent) => {
        item.isActive = false;
      });
      step.isActive = true;
      this.stepChange.emit(step);
      if (this.routing && !!step.route) {
        setTimeout(() => {
          this.router.navigate([step.route], {fragment: step.fragment, queryParams: step.params});
        }, 0);
      }
    }
  }

  checkStepStatus(step: ItemComponent) {
    if (step.isDisabled) {
      return false;
    } else {
      return true
    }
  }

  /**
   * Set selected step with index number. For example setActiveStep(0);
   * @param index
   */
  setActiveStep(index: number) {
    this.selectStep(this.steps.toArray()[index]);
    this.checkStepStatus(this.steps.toArray()[index]) ? this.wizardService.active = index : '';
  }

  gotoNextStep() {
    const nextStep = Math.floor(this.wizardService.active + 1);
    nextStep <= this.steps.length ? this.setActiveStep(nextStep) : '';
  }

  gotoPrevStep() {
    const prevStep = Math.floor(this.wizardService.active - 1);
    prevStep < 0 ? '' : this.setActiveStep(prevStep);
  }
}
