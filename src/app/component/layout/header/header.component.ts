import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'

import { IUser } from '../../../common/interfaces'
import AuthServices from '../../../services/auth.service'
import { AppAction } from '../../../store/app.action'
import JWTService from '../../../services/jwt.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterLink],
})
export default class Header {
  @Input() app$: any
  constructor(public auth: AuthServices, public jwtService: JWTService, protected store: Store<any>) {}

  onLogout = () => {
    this.auth.logout({}).subscribe(() => {
      this.jwtService.destroyToken()
      this.store.dispatch(AppAction.GetAuth())
    })
  }
}
