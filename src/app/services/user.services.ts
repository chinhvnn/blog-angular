import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export default class UserService {
  constructor(private readonly http: HttpClient) {}

  getUsers({ currentPage }: any): Observable<any> {
    return this.http.get<any>('admin/users').pipe()
  }

  getUserById(_id: string): Observable<any> {
    return this.http.get<any>(`admin/user/${_id}`).pipe()
  }
}
