import { Coordinate, CoordinateSet } from 'data/dataTypes'
import {
  ADD_SETS, SELECT_SET, SetAction, SetState
} from './setTypes'

const sets = (state: SetState = [], action: SetAction): SetState => {
  switch (action.type) {

    case ADD_SETS:
      return state.concat(action.data)

    // TODO: map selection?
    case SELECT_SET:
      return selectSet(action.datum, state)

    default:
      return state
  }
}

const selectSet = (clicked: Coordinate, state: CoordinateSet[]): SetState => {
  console.log('clicked', clicked)
  return state
}

export default sets