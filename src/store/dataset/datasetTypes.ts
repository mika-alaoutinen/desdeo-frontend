import { DataSet, Value } from 'misc/dataTypes'

// Action names
export const ADD_DATASET = 'ADD_DATASET'
export const SELECT_DATUM = 'SELECT_DATUM'

// Types for state and actions
export type DatasetState = DataSet
export type DatasetAction = AddData | SelectDatum

interface AddData {
  type: typeof ADD_DATASET,
  data: DataSet
}

interface SelectDatum {
  type: typeof SELECT_DATUM,
  datum: Value
}