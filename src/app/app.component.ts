import { Component, HostListener, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import Header from './component/layout/header/header.component'
import LeftSidebar from './component/layout/left-sidebar/leftSidebar.component'
import RightSidebar from './component/layout/right-sidebar/rightSidebar.component'
import WindowRefService from './services/windowRef.service'
import { delay, filter } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Header, LeftSidebar, RightSidebar],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public innerWidth: any
  public routerUrl: any

  constructor(private readonly router: Router, public windowRef: WindowRefService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    try {
      // In SSR, ReferenceError: window is not defined
      this.innerWidth = window.innerWidth
    } catch (error) {}

    this.router.events
      .pipe(
        delay(10),
        filter((e) => e instanceof NavigationEnd),
      )
      .subscribe((event: any) => {
        this.routerUrl = event.url
      })
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth
  }
}
