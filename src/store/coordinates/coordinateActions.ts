import { Coordinate } from 'data/dataTypes'

import {
  ADD_COORDINATES,
  CLEAR_SELECTED,
  SELECT_COORDINATES,
  SELECT_COORDINATE,
  CoordinateAction,
} from './coordinateTypes'

const addCoordinates = (data: Coordinate[]): CoordinateAction => ({
  type: ADD_COORDINATES,
  data,
})

const clearSelected = (): CoordinateAction => ({
  type: CLEAR_SELECTED,
})

const selectCoordinates = (data: Coordinate[]): CoordinateAction => ({
  type: SELECT_COORDINATES,
  data,
})

const selectCoordinate = (datum: Coordinate): CoordinateAction => ({
  type: SELECT_COORDINATE,
  datum,
})

export { addCoordinates, clearSelected, selectCoordinates, selectCoordinate }
