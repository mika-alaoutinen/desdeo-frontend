import { CoordinateSet } from 'desdeo-components/build/types/dataTypes'

// Action names
export const ADD_COORDINATE_SETS = 'ADD_COORDINATE_SETS'
export const SELECT_COORDINATE_SET = 'SELECT_COORDINATE_SET'

// Types for state and actions
export type CoordinateSetState = CoordinateSet[]
export type CoordinateSetAction = AddData | SelectDatum

interface AddData {
  type: typeof ADD_COORDINATE_SETS,
  data: CoordinateSet[]
}

interface SelectDatum {
  type: typeof SELECT_COORDINATE_SET,
  datum: CoordinateSet
}