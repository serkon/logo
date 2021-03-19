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
import { Subject } from 'rxjs';

import { PaasUser } from './user';

/**
 * By using leftbar service, you can access, set user datas and switch between slim and extended modes via your own code.
 */
@Injectable({
  providedIn: 'root',
})
export class LeftbarService {
  /**
   * The user information data in PaasUser interface.
   */
  public userInfo: PaasUser;
  public userDataLoad: Subject<PaasUser> = new Subject<PaasUser>();
  /**
   * Global activation of slim mode. It accepts boolean. True sets slim mode activated.
   */
  public isSlim: boolean = false;

  constructor() {
    this.userDataLoad.subscribe((data) => {
      this.userInfo = data;
    });
  }
}
