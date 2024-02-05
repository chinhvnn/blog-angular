import { NgClass } from '@angular/common'
import { Component, Input } from '@angular/core'
import { NavigationEnd, Router, RouterLink } from '@angular/router'
import { delay, filter } from 'rxjs'

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterLink, NgClass],
  templateUrl: './leftSidebar.component.html',
  standalone: true,
})
export default class LeftSidebar {
  @Input() routerUrl: any
  @Input() innerWidth: any
  constructor(private readonly router: Router) {}

  ngOnInit() {}
}
