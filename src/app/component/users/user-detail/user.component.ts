import { Component, SimpleChanges } from '@angular/core'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import UserService from '../../../services/user.services'
import { IUser, IUserInput } from '../../../common/interfaces'
import { API_STATUS, TOKEN_LOCAL_KEY } from '../../../common/constant'
import { UserAction } from '../user.action'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user.component.html',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  standalone: true,
})
export default class User {
  protected isLoading = false
  protected isEditMode = false
  protected uploadError = ''
  protected isDisableUpload = false
  public user$: Observable<{ isLoading: boolean; user: IUser }>

  protected profileImage = {} as File
  protected userName = new FormControl('')

  constructor(
    private readonly userService: UserService,
    private readonly router: ActivatedRoute,
    protected store: Store<any>,
  ) {
    this.user$ = store.select('user')
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.paramMap.subscribe((param) => {
      return this.store.dispatch(UserAction.GetUser({ id: param.get('id') || '' }))
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  onUploadProfileImage(e: any): void {
    e.preventDefault()

    if (!this.isEditMode || !this.profileImage) return
    const form = document.querySelector('form#profile-image') as any
    const url = new URL(form.action)
    const formData = new FormData(form)
    formData.append('file', this.profileImage)
    try {
      const token = window.localStorage.getItem(TOKEN_LOCAL_KEY) || ''
      // this to fix No file upload when go to multer middleware
      const fetchOptions = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: token,
        },
        method: form.method,
        body: formData,
      }
      fetch(url, fetchOptions)
        .then((res: any) => {
          if (res.status === 200) {
            this.uploadError = ''
            this.isDisableUpload = true
          } else {
            this.uploadError = res.message || 'Upload Errors'
          }
        })
        .catch((error) => {
          this.uploadError = error.message || 'Upload Errors'
        })
    } catch (error) {
      this.uploadError = 'Upload errors'
    }

    //handle save
    // this.userService
    //   .updateUserProfileImg(formData)
    //   .pipe()
    //   .subscribe((res) => {
    //     console.log('1111 update profile img', res)
    //   })
  }

  onEditClicked(e: MouseEvent): void {
    if (this.isEditMode) {
      let _id = ''
      this.user$.subscribe((data) => {
        _id = data.user._id
      })
      const userInput: IUserInput = {
        _id,
        name: this.userName.value || '',
        //...etc
      }

      //handle save
      this.userService.updateUser(userInput).subscribe((res) => {
        this.isEditMode = false
      })
    } else {
      this.isEditMode = true
    }
  }

  onFileSelected(e: Event): void {
    this.isDisableUpload = false
    this.profileImage = (e.target as HTMLInputElement).files?.[0] || ({} as File)
  }
}
