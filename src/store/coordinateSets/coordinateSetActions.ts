import { CoordinateSet } from 'desdeo-components/build/types/dataTypes'

import {
  ADD_COORDINATE_SETS, SELECT_COORDINATE_SET, CoordinateSetAction
} from './coordinateSetTypes'

const addSets = (data: CoordinateSet[]): CoordinateSetAction => ({
  type: ADD_COORDINATE_SETS,
  data
})

const selectSet = (datum: CoordinateSet): CoordinateSetAction => ({
  type: SELECT_COORDINATE_SET,
  datum
})

export { addSets, selectSet }