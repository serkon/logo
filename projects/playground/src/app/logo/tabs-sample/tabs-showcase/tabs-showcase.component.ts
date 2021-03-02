import { Component, QueryList, ViewChild } from '@angular/core';

import { TabComponent, TabsComponent } from '@logo-software/tabs';

@Component({
  selector: 'logo-tabs-showcase',
  templateUrl: './tabs-showcase.component.html',
  styleUrls: ['./tabs-showcase.component.scss'],
})
export class TabsShowcaseComponent {
  @ViewChild(TabsComponent) tabsComponent;
  public items = [];

  tabChange(tab: TabComponent) {
    console.log('tab change: ', tab);
  }

  tabInit(tab: TabComponent) {
    console.log('Tabs initialized: ', tab);
  }

  tabClick(tab) {
    console.log('clicked', tab);
  }

  tabEvent(c: QueryList<TabComponent>) {
    console.log('event', c.toArray());
  }

  addTab() {
    this.items.push({});
  }

  changeTab() {
    this.tabsComponent.setActiveTab(0);
  }

}
