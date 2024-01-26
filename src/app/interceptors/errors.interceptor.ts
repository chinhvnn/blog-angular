import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, catchError, throwError } from 'rxjs'
import JWTService from '../services/jwt.service'

@Injectable({ providedIn: 'root' })
export default class ApiErrorInterceptor implements HttpInterceptor {
  constructor(private readonly router: Router, private readonly jwtService: JWTService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: any) => {
        console.log(err)
        if (err.error.message.name === 'JsonWebTokenError') {
          this.jwtService.destroyToken()
          this.router.navigate(['login'])
        }

        return throwError(() => err.error)
      }),
    )
  }
}
