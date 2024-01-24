import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import Header from './component/layout/header/header.component'
import LeftSidebar from './component/layout/left-sidebar/leftSidebar.component'
import RightSidebar from './component/layout/right-sidebar/rightSidebar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Header, LeftSidebar, RightSidebar],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {}
}
