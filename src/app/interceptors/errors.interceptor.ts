import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, catchError, throwError } from 'rxjs'
import JWTService from '../services/jwt.service'
import { MessageRes } from '../common/constant'

@Injectable({ providedIn: 'root' })
export default class ApiErrorInterceptor implements HttpInterceptor {
  constructor(private readonly router: Router, private readonly jwtService: JWTService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: any) => {
        if (err?.error?.message === MessageRes.JWTErrors) {
          this.jwtService.destroyToken()
          this.router.navigate(['login'])
        }

        return throwError(() => err.error)
      }),
    )
  }
}
