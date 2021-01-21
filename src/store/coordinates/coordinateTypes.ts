import { Coordinate } from 'desdeo-components/build/types/dataTypes'

// Action names
export const ADD_DATA = 'ADD_DATA'
export const CLEAR_SELECTED = 'CLEAR SELECTED'
export const SELECT_DATA = 'SELECT_DATA'
export const SELECT_DATUM = 'SELECT_DATUM'

// Types for state and actions
export type DataState = Coordinate[]
export type DataAction =
  | AddData
  | ClearSelected
  | SelectData
  | SelectDatum

interface AddData {
  type: typeof ADD_DATA,
  data: Coordinate[]
}

interface ClearSelected {
  type: typeof CLEAR_SELECTED
}

interface SelectData {
  type: typeof SELECT_DATA,
  data: Coordinate[]
}

interface SelectDatum {
  type: typeof SELECT_DATUM,
  datum: Coordinate
}