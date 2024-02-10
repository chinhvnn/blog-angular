import { Component, HostListener, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router'
import { Observable, delay, filter } from 'rxjs'
import { Store } from '@ngrx/store'

import Header from './component/layout/header/header.component'
import LeftSidebar from './component/layout/left-sidebar/leftSidebar.component'
import RightSidebar from './component/layout/right-sidebar/rightSidebar.component'
import WindowRefService from './services/windowRef.service'
import { IUser } from './common/interfaces'
import { AppAction } from './store/app.action'
import Loading from './component/layout/loading.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Header, LeftSidebar, RightSidebar, Loading],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public innerWidth: any
  public routerUrl: any
  public app$: Observable<{ isLoading: boolean; authUser: IUser }>

  constructor(
    private readonly router: Router,
    public windowRef: WindowRefService,
    protected store: Store<any>,
  ) {
    this.app$ = store.select('app')
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    try {
      // In SSR, ReferenceError: window is not defined
      this.innerWidth = window.innerWidth
    } catch (error) {}

    // Get router url
    this.router.events
      .pipe(
        delay(10),
        filter((e) => e instanceof NavigationEnd),
      )
      .subscribe((event: any) => {
        this.routerUrl = event.url
      })

    // Get User login
    this.store.dispatch(AppAction.GetAuth())
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth
  }
}
