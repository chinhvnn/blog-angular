import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as I from '../common/interfaces'
import { Observable } from 'rxjs'
import JWTService from './jwt.service'

@Injectable({ providedIn: 'root' })
export default class AuthServices {
  constructor(public http: HttpClient, private readonly jwtService: JWTService) {}

  public isAuthenticated(): boolean {
    if (typeof window !== 'undefined') {
      const token = this.jwtService.getToken()
      return !!token
    }

    return false
  }

  public login(body: I.ILoginInput): Observable<any> {
    return this.http.post<any>('login', body).pipe()
  }

  public logout(body: any): Observable<any> {
    return this.http.post<any>('admin/logout', body).pipe()
  }
}
