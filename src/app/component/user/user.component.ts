import { Component, SimpleChanges } from '@angular/core'
import UserService from '../../services/user.services'
import { API_STATUS } from '../../common/constant'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  imports: [CommonModule],
  standalone: true,
})
export default class User {
  public title = 'User'
  public userData = [] as any

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userService.getUsers(1).subscribe((res) => {
      if (res.status === API_STATUS.SUCCESS && res?.data?.users) {
        this.userData = res.data.users
        console.log('111 this.userData', this.userData)
      }
    })
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
