import { NgIf } from '@angular/common'
import { Component, Input, SimpleChanges } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router, RouterEvent, RouterLink, RouterModule } from '@angular/router'
import { delay, filter } from 'rxjs'

@Component({
  selector: 'app-right-sidebar',
  imports: [RouterLink, NgIf, RouterModule],
  templateUrl: './rightSidebar.component.html',
  standalone: true,
})
export default class RightSidebar {
  public routerUrl: string = ''
  @Input() innerWidth: any

  constructor(private readonly router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(
        delay(10),
        filter((e) => e instanceof NavigationEnd),
      )
      .subscribe((event: any) => {
        this.routerUrl = event.url
      })
  }
}
