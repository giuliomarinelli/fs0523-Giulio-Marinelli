import { JwtHelperService } from '@auth0/angular-jwt';
import { iAuthData } from './Models/i-auth-data';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iLoginData } from './Models/i-login-data';
import { Observable, BehaviorSubject, map, tap } from 'rxjs'
import { iRegister } from './Models/i-register';
import { JwtModule } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authSubject = new BehaviorSubject<iAuthData | null>(null)
  user$: Observable<iAuthData | null> = this.authSubject.asObservable()
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user))
  jwtH: JwtHelperService = new JwtHelperService()
  endpoint: string = `${environment.apiUrl}`

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
