import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

export const authGuard: CanActivateFn = (route, state) => {
  const keycloakService = inject(KeycloakService);
  const router = inject(Router);
  const keycloakAuthGuard = new AuthGuard(router, keycloakService);
  return keycloakAuthGuard.canActivate(route, state);
};


class AuthGuard extends KeycloakAuthGuard {

  constructor(protected override readonly router: Router, protected readonly keycloakService: KeycloakService) {
    super(router, keycloakService);
  }

  public async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if (!this.authenticated) {
      await this.keycloakService.login({
        redirectUri: window.location.origin + state.url
      });
    }

    const requiredRoles = route.data['roles'];

    if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
      return true;
    }

    return requiredRoles.every((role) => this.roles.includes(role));
  }
  
}