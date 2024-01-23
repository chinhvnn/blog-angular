import { Component, DestroyRef, inject } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import AuthServices from '../../services/auth.service'
import { API_STATUS } from '../../common/constant'
import JWTService from '../../services/jwt.service'

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [RouterLink, ReactiveFormsModule],
  standalone: true,
})
export default class LoginComponent {
  public email = new FormControl('', [Validators.required, Validators.email])
  public password = new FormControl('', [Validators.required, Validators.minLength(6)])
  public remember = new FormControl()
  public errors = ''

  constructor(public auth: AuthServices, private readonly router: Router, private readonly jwtService: JWTService) {
    if (this.auth.isAuthenticated()) {
      this.router.navigate([''])
    }
  }

  handleLoginSubmit(): void {
    if (this.email.valid && this.password.valid && this.email.value && this.password.value) {
      this.errors = ''
      this.auth
        .login({ email: this.email.value, password: this.password.value, remember: this.remember.value })
        .subscribe((res: any) => {
          if (res.status === API_STATUS.SUCCESS && res.token) {
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
