import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, ObservableInput, switchMap } from 'rxjs';
import { AuthService } from './auth.service';
import { iAuthData } from './Models/i-auth-data';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private authSvc: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authSvc.user$.pipe(switchMap((user: iAuthData | null) => {
      if (!user) return next.handle(request)
      const newReq = request.clone(
        {
          headers: request.headers.append('Authorization', `Bearer ${user.accessToken}`)
        }
      )
        return next.handle(newReq)
    }))

  }
}
