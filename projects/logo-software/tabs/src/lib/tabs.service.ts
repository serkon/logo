import { Injectable } from '@angular/core';

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
