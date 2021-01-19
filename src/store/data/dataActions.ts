import { Coordinate } from 'desdeo-components/build/types/dataTypes'

import {
  ADD_DATA, CLEAR_SELECTED, SELECT_DATA, SELECT_DATUM, DataAction
} from './dataTypes'

export const addData = (data: Coordinate[]): DataAction => ({
  type: ADD_DATA,
  data
})

export const clearSelected = (): DataAction => ({
  type: CLEAR_SELECTED
})

export const selectData = (data: Coordinate[]): DataAction => ({
  type: SELECT_DATA,
  data
})

export const selectDatum = (datum: Coordinate): DataAction => ({
  type: SELECT_DATUM,
  datum
})