import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { httpOptions } from '../common/constant'
import * as I from '../common/intefaces'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export default class AuthServices {
  constructor(public http: HttpClient) {}

  public isAuthenticated(): boolean {
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem('token')
      console.log('111 token login', token)

      return !!token
    }

    return false
  }

  public login(body: I.ILoginInput): Observable<any> {
    return this.http.post<any>('login', body, { ...httpOptions }).pipe()
  }
}
