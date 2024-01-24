import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(
      '111 route blog',
      this.route.paramMap.subscribe((param) => console.log('111', param.get('id'))),
    )
  }
}
