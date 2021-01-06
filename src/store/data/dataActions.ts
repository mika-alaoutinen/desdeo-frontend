import { Datum } from 'desdeo-components/build/types/dataTypes'

import {
  ADD_DATA, CLEAR_SELECTED, SELECT_DATA, SELECT_DATUM, DataAction
} from './dataTypes'

export const addData = (data: Datum[]): DataAction => ({
  type: ADD_DATA,
  data
})

export const clearSelected = (): DataAction => ({
  type: CLEAR_SELECTED
})

export const selectData = (data: Datum[]): DataAction => ({
  type: SELECT_DATA,
  data
})

export const selectDatum = (datum: Datum): DataAction => ({
  type: SELECT_DATUM,
  datum
})