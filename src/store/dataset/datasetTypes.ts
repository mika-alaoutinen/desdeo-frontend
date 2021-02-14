import { Coordinate, DataSet } from 'misc/dataTypes'

// Action names
export const ADD_SETS = 'ADD_SETS'
export const SELECT_SET = 'SELECT_SET'

// Types for state and actions
export type SetState = DataSet
export type SetAction = AddData | SelectDatum

interface AddData {
  type: typeof ADD_SETS,
  data: DataSet
}

interface SelectDatum {
  type: typeof SELECT_SET,
  datum: Coordinate
}