/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

export class Events {
  public drag?: { start?: Function, complete: Function };

  constructor(events ?: Events) {
    this.drag = {
      start: (response: any) => response,
      complete: (response: any) => response,
    };
    if (events) {
      Object.assign(this, events);
    }
  }
}
