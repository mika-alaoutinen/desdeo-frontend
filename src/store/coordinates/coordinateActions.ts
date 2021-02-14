import { Coordinate } from 'misc/dataTypes'

import {
  ADD_DATA, CLEAR_SELECTED, SELECT_DATA, SELECT_DATUM, DataAction
} from './coordinateTypes'

const addCoordinates = (data: Coordinate[]): DataAction => ({
  type: ADD_DATA,
  data
})

const clearSelected = (): DataAction => ({
  type: CLEAR_SELECTED
})

const selectCoordinates = (data: Coordinate[]): DataAction => ({
  type: SELECT_DATA,
  data
})

const selectCoordinate = (datum: Coordinate): DataAction => ({
  type: SELECT_DATUM,
  datum
})

export {
  addCoordinates, clearSelected, selectCoordinates, selectCoordinate
}