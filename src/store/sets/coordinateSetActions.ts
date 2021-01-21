import { CoordinateSet } from 'desdeo-components/build/types/dataTypes'

import {
  ADD_SETS, SELECT_SET, SetAction
} from './coordinateSetTypes'

const addSets = (data: CoordinateSet[]): SetAction => ({
  type: ADD_SETS,
  data
})

const selectSet = (datum: CoordinateSet): SetAction => ({
  type: SELECT_SET,
  datum
})

export { addSets, selectSet }