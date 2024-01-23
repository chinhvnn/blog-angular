import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { API_VERSION, TOKEN_LOCAL_KEY } from '../common/constant'

@Injectable({ providedIn: 'root' })
export default class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: '*',
        Authorization: window.localStorage.getItem(TOKEN_LOCAL_KEY) || '',
      }),
    }
    const apiRequest = req.clone({ url: `${API_VERSION}/${req.url}`, ...httpOptions })

    return next.handle(apiRequest)
  }
}
