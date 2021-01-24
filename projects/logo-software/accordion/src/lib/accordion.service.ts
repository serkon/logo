/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Injectable } from '@angular/core';
import { MenuItem } from './accordion.component';

@Injectable({providedIn: 'root'})
export class AccordionService {

  items: MenuItem;

  constructor() {
  }

}
