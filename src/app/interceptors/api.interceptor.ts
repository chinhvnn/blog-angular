import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { END_POINT } from '../common/constant'

@Injectable({ providedIn: 'root' })
export default class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiRequest = req.clone({ url: `${END_POINT}/${req.url}` })
    console.log('111 apiRequest', apiRequest)

    return next.handle(apiRequest)
  }
}
