import { EventEmitter, Injectable } from '@angular/core';

import { TabComponent } from './tab.component';

/**
 * Tabs service shows current TabComponent list and active Tab
 */
@Injectable()
export class TabsService {
  /**
   * Currently active tab
   */
  public active: number;
}
