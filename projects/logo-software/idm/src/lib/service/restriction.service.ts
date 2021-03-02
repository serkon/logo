import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { StorageClass } from '@logo-software/storage';
import { IdmService } from '../idm.service';

/**
 * This class uses for activate the components in Router parameter with CanActivate.
 * An array of dependency-injection tokens used to look up CanActivate() handlers, in order to determine if the current user is allowed to activate the component. By default, any user can activate.
 */
@Injectable({
  providedIn: 'root',
})
export class RestrictionService implements CanActivate {

  constructor(private idmService: IdmService) {
  }

  public async canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot) {
    const token = StorageClass.getItem('token');
    this.idmService.url = routerStateSnapshot.url;
    return await this.idmService.validateToken(token);
  }
}
