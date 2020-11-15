import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { reducer } from './store'

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

type RootState = ReturnType<typeof reducer>