import { Routes } from '@angular/router'
import LoginComponent from './component/login/login.component'
import AuthGuard from './services/authGuard.service'
import { BlogComponent } from './component/blog/blog.component'
import { HomeComponent } from './component/home/home.component'
import Users from './component/users/users.component'
import User from './component/users/user-detail/user.component'

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => LoginComponent,
  },
  {
    path: '',
    loadComponent: () => HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadComponent: () => Users,
    canActivate: [AuthGuard],
  },
  {
    path: 'users/:id',
    loadComponent: () => User,
    canActivate: [AuthGuard],
  },
  {
    path: 'blog/:id',
    loadComponent: () => BlogComponent,
  },
]
