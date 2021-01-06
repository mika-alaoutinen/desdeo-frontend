import { Datum } from 'desdeo-components/build/types/dataTypes'

import { ADD_DATA, SELECT_DATA, SELECT_DATUM, DataAction } from './dataTypes'

// Adds test data into store for development purposes
export const addData = (data: Datum[]): DataAction => ({
  type: ADD_DATA,
  data
})

export const selectData = (data: Datum[]): DataAction => ({
  type: SELECT_DATA,
  data
})

export const selectDatum = (datum: Datum): DataAction => ({
  type: SELECT_DATUM,
  datum
})