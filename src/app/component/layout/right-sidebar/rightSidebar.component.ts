import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'right-sidebar',
  imports: [RouterLink],
  templateUrl: './rightSidebar.component.html',
  standalone: true,
})
export default class RightSidebar {
  constructor() {}
}
