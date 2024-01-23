import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import AuthServices from '../../services/auth.service'

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

  constructor(public auth: AuthServices) {}

  ngOnInit(): void {
    console.log('111 ngOnInit login')
  }

  handleLoginSubmit(): void {
    console.log('111 login submit email', this.email.errors, this.password.errors, this.remember.errors)
    console.log('111 login submit email', this.email.value, this.password.value, this.remember.value)
    if (this.email.valid && this.password.valid && this.email.value && this.password.value) {
      this.errors = ''
      this.auth
        .login({ email: this.email.value, password: this.password.value, remember: this.remember.value })
        .subscribe((res: any) => {
          console.log('1111111 resssss', res)

          if (res) {
          }
        })
    } else {
      this.errors = 'Invalid email or password'
    }
  }
}
