import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { StorageClass } from '@logo-software/storage';
import { Role, User } from '../interface/user';

/**
 * Privilege Service uses for check user roles for access the content.
 */
@Injectable({
  providedIn: 'root',
})
export class PrivilegeService {

  /**
   * check by route data is component accessible by client
   * @param activatedRouteSnapshot
   */
  public static check(activatedRouteSnapshot: ActivatedRouteSnapshot) {
    let status = true;
    const userObject: { [key: string]: User } = StorageClass.getItem('login');
    if (activatedRouteSnapshot.data && userObject && userObject.user) {
      if (userObject.user.roles) {
        status = userObject.user.roles.includes((item: Role) => item.name === activatedRouteSnapshot.data.role);
      }
    }
    return !!status;
  }
}
