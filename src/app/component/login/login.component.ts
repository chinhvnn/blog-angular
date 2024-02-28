import { Component, DestroyRef, inject } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'

import AuthServices from '../../services/auth.service'
import { API_STATUS } from '../../common/constant'
import JWTService from '../../services/jwt.service'
import { IUser } from '../../common/interfaces'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  standalone: true,
})
export default class LoginComponent {
  public app$: Observable<{ isLoading: boolean; authUser: IUser }>
  public email = new FormControl('', [Validators.required, Validators.email])
  public password = new FormControl('', [Validators.required, Validators.minLength(6)])
  public remember = new FormControl()
  public errors = ''

  constructor(
    public auth: AuthServices,
    private readonly router: Router,
    private readonly jwtService: JWTService,
    private readonly store: Store<any>,
  ) {
    if (this.auth.isAuthenticated()) {
      this.router.navigate([''])
    }
    this.app$ = store.select('app')
  }

  handleLoginSubmit(): void {
    if (this.email.valid && this.password.valid && this.email.value && this.password.value) {
      this.errors = ''
      this.auth
        .login({ email: this.email.value, password: this.password.value, remember: this.remember.value })
        .subscribe((res: any) => {
          if (res.result === API_STATUS.SUCCESS && res.token) {
            this.jwtService.saveToken(res.token)
            this.router.navigate([''])
          } else {
            this.errors = res?.message || 'Invalid email or password'
          }
        })
    } else {
      this.errors = 'Invalid email or password format'
    }
  }
}
