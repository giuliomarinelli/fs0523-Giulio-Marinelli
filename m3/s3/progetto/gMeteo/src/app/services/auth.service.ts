import { Injectable } from '@angular/core';
import { iAuthData } from '../Models/auth/i-auth-data';
import { BehaviorSubject, Observable, Subject, catchError, map, tap, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { iRegister } from '../Models/auth/i-register';
import { iLoginData } from '../Models/auth/i-login-data';
import { iFavourite } from '../Models/i-favourite';
import { iFavouriteInput } from '../Models/i-favourite-input';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSubject = new BehaviorSubject<iAuthData | null>(null)
  user$: Observable<iAuthData | null> = this.authSubject.asObservable()
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user))

  jwtH: JwtHelperService = new JwtHelperService()
  endpoint: string = `${environment.backendUrl}`

  constructor(private http: HttpClient) {
    this.restoreUserSession()
  }



  signUp(register: iRegister): Observable<iAuthData> {
    return this.http.post<iAuthData>(`${this.endpoint}/register`, register)
  }

  logIn(loginData: iLoginData): Observable<iAuthData> {
    return this.http.post<iAuthData>(`${this.endpoint}/login`, loginData)
      .pipe(tap(data => {
        this.authSubject.next(data)
        localStorage.setItem('authData', JSON.stringify(data))
      }))
  }


  logOut() {
    this.authSubject.next(null)
    localStorage.removeItem('authData')
  }

  autoLogOut(jwt: string) {
    const expDate = this.jwtH.getTokenExpirationDate(jwt) as Date
    const remainingMs = expDate.getTime() - new Date().getTime()
    setTimeout(this.logOut, remainingMs)
  }

  restoreUserSession() {
    const userJson: string | null = localStorage.getItem('authData')
    if (!userJson) return
    const accessData: iAuthData = JSON.parse(userJson)
    if (this.jwtH.isTokenExpired(accessData.accessToken)) return
    this.autoLogOut(accessData.accessToken)
    this.authSubject.next(accessData)

  }

}
