import { inject } from '@angular/core'
import { catchError, exhaustMap, map, of } from 'rxjs'
import { createEffect, Actions, ofType } from '@ngrx/effects'

import UserService from '../../services/user.services'
import { UserAction } from './user.action'

export const loadUserDetail = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) => {
    return actions$.pipe(
      ofType(UserAction.GetUser),
      exhaustMap((action) => {
        return userService
          .getUserById(action.id)
          .pipe(map((user) => UserAction.GetUserSuccess({ payload: user })))
      }),
      catchError((error) => of(UserAction.GetUserFail(error))),
    )
  },
  { functional: true },
)
