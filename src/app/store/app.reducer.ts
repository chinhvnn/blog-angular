import { createReducer, on } from '@ngrx/store'
import { AppAction } from './app.action'

export const initialState = {
  isLoading: false,
  authUser: {},
}

export const appReducer = createReducer(
  initialState,
  on(AppAction.GetAuthSuccess, (state: any, action) => {
    return { ...state, authUser: action.payload.data || {} }
  }),
)
