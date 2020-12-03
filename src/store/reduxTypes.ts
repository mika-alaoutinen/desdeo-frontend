import { createSelectorHook } from 'react-redux'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { reducer } from './store'
import { DesdeoAction } from './desdeo/desdeoTypes'

// Selector for root level state:
export const useSelector = createSelectorHook<RootState, DesdeoAction>()

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

type RootState = ReturnType<typeof reducer>