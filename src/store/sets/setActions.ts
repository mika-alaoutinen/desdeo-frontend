import { Coordinate, CoordinateSet } from 'desdeo-components/build/types/dataTypes'

import {
  ADD_SETS, SELECT_SET, SetAction
} from './setTypes'

const addSets = (data: CoordinateSet[]): SetAction => ({
  type: ADD_SETS,
  data
})

const selectSet = (datum: Coordinate): SetAction => ({
  type: SELECT_SET,
  datum
})

export { addSets, selectSet }