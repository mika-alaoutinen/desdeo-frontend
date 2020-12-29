import { Datum } from 'desdeo-components/build/types/dataTypes'

import { ADD_DATA, SELECT_DATUM, DataAction } from './dataTypes'
import { testdata } from '../../misc/testdata'

// Adds test data into store for development purposes
export const addData = (): DataAction => ({
  type: ADD_DATA,
  data: testdata
})

export const selectDatum = (datum: Datum): DataAction => ({
  type: SELECT_DATUM,
  datum
})