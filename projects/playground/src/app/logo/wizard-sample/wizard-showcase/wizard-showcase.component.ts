import { Component, OnInit, QueryList, ViewChild } from '@angular/core';

import { ItemComponent, WizardComponent, WizardService } from '@logo-software/wizard';

@Component({
  selector: 'logo-wizard-showcase',
  templateUrl: './wizard-showcase.component.html',
  styleUrls: ['./wizard-showcase.component.scss'],
})
export class WizardShowcaseComponent implements OnInit {

  @ViewChild(WizardComponent) wizardComponent;

  constructor(public wizardService: WizardService) {
  }

  stepChange(tab: ItemComponent) {
    console.log('tab change: ', tab);
  }

  stepInit(tab: ItemComponent) {
    console.log('Tabs initialized: ', tab);
  }

  stepClick(tab) {
    console.log('clicked', tab);
  }

  stepEvent(c: QueryList<ItemComponent>) {
    console.log('event', c.toArray());
  }

  ngOnInit(): void {
    this.wizardService.warningSteps.push(2);
  }

  public toggleVertical() {
    this.wizardComponent.isVertical = !this.wizardComponent.isVertical;
  }

}
