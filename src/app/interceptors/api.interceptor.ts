import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { API_VERSION, TOKEN_LOCAL_KEY } from '../common/constant'
import { API_V1_URL } from '../common/router'

@Injectable({ providedIn: 'root' })
export default class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let contentType = 'application/json' as any
    let enctype = ''
    let token = ''

    if (req.method === 'POST' && req.url === API_V1_URL.UploadProfileImg) {
      contentType = ''
      // enctype = 'multipar/form-data; boundary=----WebKitFormBoundaryu8mhwsz1RfzQNG5Y'
    }

    try {
      token = window.localStorage.getItem(TOKEN_LOCAL_KEY) || ''
    } catch (error) {}

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': contentType,
        enctype: enctype,
        'Access-Control-Allow-Origin': '*',
        Accept: '*',
        Authorization: token,
      }),
    }
    const apiRequest = req.clone({
      url: `${API_VERSION}/${req.url}`,
      ...httpOptions,
    })

    return next.handle(apiRequest)
  }
}
