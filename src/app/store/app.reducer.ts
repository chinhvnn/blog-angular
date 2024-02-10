import { createReducer, on } from '@ngrx/store'
import { AppAction } from './app.action'

export const initialState = {
  isLoading: true,
  authUser: {},
}

export const appReducer = createReducer(
  initialState,
  on(AppAction.GetAuthSuccess, (state: any, action) => {
    return { ...state, isLoading: false, authUser: action.payload.data || {} }
  }),
)
