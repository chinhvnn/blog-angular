import { createAction, props } from '@ngrx/store'

export const AppAction = {
  GetAuth: createAction('Auth/Get'),
  GetAuthSuccess: createAction('Auth/GetSuccess', props<any>()),
  GetAuthFail: createAction('Auth/GetFail', props<any>()),
}
