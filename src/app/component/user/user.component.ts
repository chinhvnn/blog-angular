import { Component } from '@angular/core'

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  standalone: true,
})
export default class User {
  public title = 'User'

  constructor() {
    console.log('111 constructor user')
  }

  ngOnInit(): void {
    console.log('111 ngOnInitUser')
  }
}
