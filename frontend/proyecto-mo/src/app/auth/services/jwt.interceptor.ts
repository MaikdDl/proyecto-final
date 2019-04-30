import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private store: Store) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const usuarioActual = this.store.selectSnapshot(state => state.auth);

    if (usuarioActual && usuarioActual.accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `JWT ${usuarioActual.accessToken}`
        }
      });
    }
    return next.handle(request);
  }
}