import { Routes } from '@angular/router'
import LoginComponent from './component/login/login.component'
import User from './component/user/user.component'
import AuthGuard from './services/authGuard.service'
import { BlogComponent } from './component/blog/blog.component'

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => LoginComponent,
  },
  {
    path: '',
    loadComponent: () => User,
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    loadComponent: () => User,
    canActivate: [AuthGuard],
  },
  {
    path: 'blog/:id',
    loadComponent: () => BlogComponent,
  },
]
