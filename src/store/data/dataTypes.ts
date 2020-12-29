import { Datum } from 'desdeo-components/build/types/dataTypes'

// Action names
export const ADD_DATA = 'ADD_DATA'
export const SELECT_DATUM = 'SELECT_DATUM'

// Types for state and actions
export type DataState = Datum[]
export type DataAction = AddData | SelectDatum

interface AddData {
  type: typeof ADD_DATA,
  data: Datum[]
}

interface SelectDatum {
  type: typeof SELECT_DATUM,
  datum: Datum
}