import { DataSet, Value } from 'data/dataTypes'

// Action names
export const ADD_DATASET = 'ADD_DATASET'
export const SELECT_DATA = 'SELECT_DATA'
export const SELECT_DATUM = 'SELECT_DATUM'

// Types for state and actions
export type DatasetState = DataSet[]
export type DatasetAction = AddData | SelectData | SelectDatum

interface AddData {
  type: typeof ADD_DATASET
  data: DataSet[]
}

interface SelectData {
  type: typeof SELECT_DATA
  data: Value[]
}

interface SelectDatum {
  type: typeof SELECT_DATUM
  datum: Value
}
