import {
  ADD_COORDINATE_SETS, SELECT_COORDINATE_SET, CoordinateSetAction, CoordinateSetState
} from './coordinateSetTypes'

const coordinateSets = (
  state: CoordinateSetState = [], action: CoordinateSetAction
): CoordinateSetState => {
  switch (action.type) {

    case ADD_COORDINATE_SETS:
      return state.concat(action.data)

    // TODO: map selection?
    case SELECT_COORDINATE_SET:
      return state

    default:
      return state
  }
}

export default coordinateSets