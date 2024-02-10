import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { IUser } from '../../../common/interfaces'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterLink],
})
export default class Header {
  @Input() app$: any
  constructor() {}
}
