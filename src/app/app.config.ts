import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
import { KeycloakAngularModule } from 'keycloak-angular';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './interceptor/token.interceptor';

export function initializeKeyCloak(kcService: KeycloakService) {
  return () => kcService.init({
    config: {
      url: 'http://localhost:8080',
      realm: 'HIMS',
      clientId: 'hims-app'
    },
    initOptions: {
      onLoad: 'login-required'

    }
  });
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
              {provide: APP_INITIALIZER, useFactory: initializeKeyCloak, multi: true, deps: [KeycloakService]}, 
              KeycloakAngularModule, 
              KeycloakService,
              KeycloakBearerInterceptor,
              provideHttpClient(withInterceptors([tokenInterceptor]))],
};
