import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { KeycloakBearerInterceptor } from 'keycloak-angular';
import { Observable } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const keycloakInterceptor = inject(KeycloakBearerInterceptor);
  const handler = new RequestHandler(next);
  return keycloakInterceptor.intercept(req, handler);
};

class RequestHandler extends HttpHandler {

  constructor(private next: HttpHandlerFn) {
    super()
  }

  override handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return this.next(req);
  }
  
}
