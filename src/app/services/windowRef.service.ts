import { Injectable } from '@angular/core'
import { TOKEN_LOCAL_KEY } from '../common/constant'

@Injectable({ providedIn: 'root' })
export default class WindowRefService {
  getInnerWidth(): number {
    return window.innerWidth
  }
}
