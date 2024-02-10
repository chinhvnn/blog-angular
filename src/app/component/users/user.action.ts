import { createAction, props } from '@ngrx/store'

export const UserAction = {
  GetUser: createAction('User/Get', props<{ id: string }>()),
  GetUserSuccess: createAction('User/GetSuccess', props<{ payload: any }>()),
  GetUserFail: createAction('User/GetUserFail', props<{ error: any }>()),

  GetUsers: createAction('Users/Get'),
}
