import { Routes } from '@angular/router'
import LoginComponent from './component/login/login.component'
import User from './component/user/user.component'

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => LoginComponent,
  },
  {
    path: '',
    loadComponent: () => User,
  },
]
