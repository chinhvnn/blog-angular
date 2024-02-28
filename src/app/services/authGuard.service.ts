import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import AuthServices from './auth.service'

@Injectable({ providedIn: 'root' })
export default class AuthGuard implements CanActivate {
  constructor(public auth: AuthServices, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      // this.router.navigate(['login'])
      return false
    }
    return true
  }
}
