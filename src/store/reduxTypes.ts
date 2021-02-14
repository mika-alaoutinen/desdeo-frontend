import { createSelectorHook } from 'react-redux'

import { CoordinateAction } from './coordinates/coordinateTypes'
import { DatasetAction } from './dataset/datasetTypes'
import { reducer } from './store'

type RootAction = CoordinateAction | DatasetAction
type RootState = ReturnType<typeof reducer>

// Selector for root level state:
export const useSelector = createSelectorHook<RootState, RootAction>()