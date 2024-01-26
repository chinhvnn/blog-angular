import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import UserService from '../../../services/user.services'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user.component.html',
  imports: [RouterLink],
  standalone: true,
})
export default class User {
  public user = {} as any
  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userService.getUserById('65966aa5815e66030ca27ab8').subscribe((res) => {
      this.user = res.data || {}
    })
  }
}
