import { inject } from '@angular/core'
import { catchError, exhaustMap, map, of } from 'rxjs'
import { createEffect, Actions, ofType } from '@ngrx/effects'

import UserService from '../services/user.services'
import { AppAction } from './app.action'

export const loadAuthUser = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) => {
    return actions$.pipe(
      ofType(AppAction.GetAuth),
      exhaustMap((action) => {
        return userService.getAuthUser().pipe(
          map((user) => {
            return AppAction.GetAuthSuccess({ payload: user })
          }),
        )
      }),
      catchError((error) => {
        return of(AppAction.GetAuthFail(error))
      }),
    )
  },
  { functional: true },
)
