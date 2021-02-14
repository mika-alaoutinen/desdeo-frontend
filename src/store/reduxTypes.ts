import { createSelectorHook } from 'react-redux'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { CoordinateAction } from './coordinates/coordinateTypes'
import { DatasetAction } from './dataset/datasetTypes'

import { reducer } from './store'

// Selector for root level state:
export const useSelector = createSelectorHook<RootState, RootAction>()

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

type RootAction = CoordinateAction | DatasetAction
type RootState = ReturnType<typeof reducer>