import { Coordinate } from 'misc/dataTypes'

// Action names
export const ADD_COORDINATES = 'ADD_COORDINATES'
export const CLEAR_SELECTED = 'CLEAR SELECTED'
export const SELECT_COORDINATES = 'SELECT_COORDINATES'
export const SELECT_COORDINATE = 'SELECT_COORDINATE'

// Types for state and actions
export type CoordinateState = Coordinate[]
export type CoordinateAction =
  | AddCoordinate
  | ClearSelected
  | SelectCoordinates
  | SelectCoordinate

interface AddCoordinate {
  type: typeof ADD_COORDINATES,
  data: Coordinate[]
}

interface ClearSelected {
  type: typeof CLEAR_SELECTED
}

interface SelectCoordinates {
  type: typeof SELECT_COORDINATES,
  data: Coordinate[]
}

interface SelectCoordinate {
  type: typeof SELECT_COORDINATE,
  datum: Coordinate
}