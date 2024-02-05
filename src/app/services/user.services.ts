import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { IUser, IUserInput } from '../common/interfaces'
import { API_V1_URL } from '../common/router'

@Injectable({ providedIn: 'root' })
export default class UserService {
  constructor(private readonly http: HttpClient) {}

  getUsers({ currentPage }: any): Observable<any> {
    return this.http.get<any>(API_V1_URL.GetUsers).pipe()
  }

  getUserById(_id: string): Observable<any> {
    return this.http.get<any>(`${API_V1_URL.HandleUserById}/${_id}`).pipe()
  }

  updateUser(userBody: any): Observable<any> {
    return this.http.put<any>(API_V1_URL.HandleUserById, userBody).pipe()
  }

  updateUserProfileImg(file: FormData): Observable<any> {
    return this.http
      .post<any>(API_V1_URL.UploadProfileImg, file, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe()
  }
}
