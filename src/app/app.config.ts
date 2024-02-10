import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser'
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http'
import { StoreModule, provideStore } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import ApiInterceptor from './interceptors/api.interceptor'
import ApiErrorInterceptor from './interceptors/errors.interceptor'
import { userReducer } from './component/users/user.reducer'
import { loadUserDetail } from './component/users/user.effect'
import { loadAuthUser } from './store/app.effect'
import { appReducer } from './store/app.reducer'

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    importProvidersFrom(
      StoreModule.forRoot({
        user: userReducer,
        app: appReducer,
      }),
      EffectsModule.forRoot({
        loadUserDetail: loadUserDetail,
        loadAuthUser: loadAuthUser,
      }),
    ),
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiErrorInterceptor, multi: true },
  ],
}
