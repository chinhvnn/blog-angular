import { Injectable } from '@angular/core'
import { TOKEN_LOCAL_KEY } from '../common/constant'

@Injectable({ providedIn: 'root' })
export default class JWTService {
  getToken(): string {
    return window.localStorage.getItem(TOKEN_LOCAL_KEY) || ''
  }

  saveToken(token: string): void {
    window.localStorage[TOKEN_LOCAL_KEY] = token
  }

  destroyToken(): void {
    window.localStorage.removeItem(TOKEN_LOCAL_KEY)
  }
}
