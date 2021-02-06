import { Coordinate } from 'data/dataTypes'

import {
  ADD_DATA, CLEAR_SELECTED, SELECT_DATA, SELECT_DATUM, DataAction
} from './coordinateTypes'

const addData = (data: Coordinate[]): DataAction => ({
  type: ADD_DATA,
  data
})

const clearSelected = (): DataAction => ({
  type: CLEAR_SELECTED
})

const selectData = (data: Coordinate[]): DataAction => ({
  type: SELECT_DATA,
  data
})

const selectDatum = (datum: Coordinate): DataAction => ({
  type: SELECT_DATUM,
  datum
})

export {
  addData, clearSelected, selectData, selectDatum
}