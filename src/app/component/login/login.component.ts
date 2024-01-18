import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [RouterLink, ReactiveFormsModule],
  standalone: true,
})
export default class LoginComponent {
  public email = new FormControl()
  public password = new FormControl()
  public remember = new FormControl()

  constructor() {}

  ngOnInit(): void {
    console.log('111 ngOnInit login')
  }

  handleLoginSubmit(): void {
    console.log('111 login submit email', this.email.value)
    console.log('111 login submit pass', this.password.value)
    console.log('111 login submit remember', this.remember.value)
  }
}
